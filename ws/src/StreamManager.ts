import WebSocket from "ws";
import { createClient, RedisClientType } from "redis";
//@ts-ignore
import youtubesearchapi from "youtube-search-api";
import { Job, Queue, Worker } from "bullmq";
import { PrismaClient, StreamType } from "@prisma/client";
import { getVideoId, isValidYoutubeURL } from "./utils";
import { getPlaylistVideoUrls } from "./functions/Youtube";

// Central brain for live rooms: keeps in-memory maps for fast lookups, mirrors
// state to Redis so multiple Node workers stay in sync, and queues DB writes
// through BullMQ workers to avoid race conditions.

const TIME_SPAN_FOR_VOTE = 1200000; // 20min
const TIME_SPAN_FOR_QUEUE = 1200000; // 20min
const TIME_SPAN_FOR_REPEAT = 3600000;
const MAX_QUEUE_LENGTH = 200;
// Redis config pulled from env to keep instances coordinated

const connection = {
  host: process.env.REDIS_HOST || "",
  port: parseInt(process.env.REDIS_PORT || "") || 6379,
};

const redisCredentials = {
  url: `redis://${connection.host}:${connection.port}`,
};

export class RoomManager {
  // Singleton that coordinates rooms, users, Redis pub/sub, and background jobs
  private static instance: RoomManager;
  public spaces: Map<string, Space>;
  public users: Map<string, User>;
  public redisClient: RedisClientType;
  public publisher: RedisClientType;
  public subscriber: RedisClientType;
  public prisma: PrismaClient;
  public queue: Queue;
  public worker: Worker;
  public wstoSpace: Map<WebSocket, string>;

  private constructor() {
    // Local caches for fast lookups; Redis handles cross-process sync
    this.spaces = new Map();
    this.users = new Map();
    this.redisClient = createClient(redisCredentials);
    this.publisher = createClient(redisCredentials);
    this.subscriber = createClient(redisCredentials);
    this.prisma = new PrismaClient();
    // Queue + worker let us throttle/serialize expensive DB operations
    this.queue = new Queue(process.pid.toString(), {
      connection,
    });
    this.worker = new Worker(process.pid.toString(), this.processJob, {
      connection,
    });
    this.wstoSpace = new Map();
  }

  static getInstance() {
    if (!RoomManager.instance) {
      RoomManager.instance = new RoomManager();
    }

    return RoomManager.instance;
  }

  async processJob(job: Job) {
    // Dispatch background jobs to the appropriate admin handlers
    const { data, name } = job;
    if (name === "cast-vote") {
      await RoomManager.getInstance().adminCastVote(
        data.creatorId,
        data.userId,
        data.streamId,
        data.vote,
        data.spaceId,
      );
    } else if (name === "add-to-queue") {
      await RoomManager.getInstance().adminAddStreamHandler(
        data.spaceId,
        data.userId,
        data.url,
        data.existingActiveStream,
      );
    } else if (name === "add-playlist-to-queue") {
      await RoomManager.getInstance().adminAddPlaylistHandler(
        data.spaceId,
        data.userId,
        data.playlistUrl,
      );
    } else if (name === "play-next") {
      await RoomManager.getInstance().adminPlayNext(data.spaceId, data.userId);
    } else if (name === "remove-song") {
      await RoomManager.getInstance().adminRemoveSong(
        data.spaceId,
        data.userId,
        data.streamId,
      );
    } else if (name === "empty-queue") {
      await RoomManager.getInstance().adminEmptyQueue(data.spaceId);
    }
  }

  async initRedisClient() {
    await this.redisClient.connect();
    await this.subscriber.connect();
    await this.publisher.connect();
  }

  onSubscribeRoom(message: string, spaceId: string) {
    // Handle events published by other server instances for the same space
    console.log("Subscibe Room", spaceId);
    const { type, data } = JSON.parse(message);
    if (type === "new-stream") {
      RoomManager.getInstance().publishNewStream(spaceId, data);
    } else if (type === "new-vote") {
      RoomManager.getInstance().publishNewVote(
        spaceId,
        data.streamId,
        data.vote,
        data.votedBy,
      );
    } else if (type === "play-next") {
      RoomManager.getInstance().publishPlayNext(spaceId);
    } else if (type === "remove-song") {
      RoomManager.getInstance().publishRemoveSong(spaceId, data.streamId);
    } else if (type === "empty-queue") {
      RoomManager.getInstance().publishEmptyQueue(spaceId);
    }
  }

  async createRoom(spaceId: string) {
    console.log(process.pid + ": createRoom: ", { spaceId });
    if (!this.spaces.has(spaceId)) {
      // Initialize space state and listen for pub/sub messages scoped to this room
      this.spaces.set(spaceId, {
        users: new Map<string, User>(),
        creatorId: "",
      });
      await this.subscriber.subscribe(spaceId, this.onSubscribeRoom);
    }
  }

  async addUser(userId: string, ws: WebSocket, token: string) {
    // Track multiple open sockets for the same logical user
    let user = this.users.get(userId);
    if (!user) {
      this.users.set(userId, {
        userId,
        ws: [ws],
        token,
      });
    } else {
      if (!user.ws.some((existingWs) => existingWs === ws)) {
        user.ws.push(ws);
      }
    }
  }

  async joinRoom(
    spaceId: string,
    creatorId: string,
    userId: string,
    ws: WebSocket,
    token: string,
  ) {
    // Ensure room/user exist locally, then bind websocket to room membership
    console.log("Join Room" + spaceId);

    let space = this.spaces.get(spaceId);
    let user = this.users.get(userId);

    if (!space) {
      await this.createRoom(spaceId);
      space = this.spaces.get(spaceId);
    }

    if (!user) {
      await this.addUser(userId, ws, token);
      user = this.users.get(userId);
    } else {
      if (!user.ws.some((existingWs) => existingWs === ws)) {
        user.ws.push(ws);
      }
    }

    this.wstoSpace.set(ws, spaceId);

    if (space && user) {
      space.users.set(userId, user);
      this.spaces.set(spaceId, {
        ...space,
        users: new Map(space.users),
        creatorId: creatorId,
      });
    }
  }

  publishEmptyQueue(spaceId: string) {
    const space = this.spaces.get(spaceId);
    space?.users.forEach((user, userId) => {
      user?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: `empty-queue/${spaceId}`,
          }),
        );
      });
    });
  }

  async adminEmptyQueue(spaceId: string) {
    const room = this.spaces.get(spaceId);
    const userId = this.spaces.get(spaceId)?.creatorId;
    const user = this.users.get(userId as string);

    if (room && user) {
      // Mark every pending stream as played and notify clients to clear UI
      await this.prisma.stream.updateMany({
        where: {
          played: false,
          spaceId: spaceId,
        },
        data: {
          played: true,
          playedTs: new Date(),
        },
      });
      await this.publisher.publish(
        spaceId,
        JSON.stringify({
          type: "empty-queue",
        }),
      );
    }
  }

  publishRemoveSong(spaceId: string, streamId: string) {
    console.log("publishRemoveSong");
    const space = this.spaces.get(spaceId);
    space?.users.forEach((user, userId) => {
      user?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: `remove-song/${spaceId}`,
            data: {
              streamId,
              spaceId,
            },
          }),
        );
      });
    });
  }

  async adminRemoveSong(spaceId: string, userId: string, streamId: string) {
    console.log("adminRemoveSong");
    const user = this.users.get(userId);
    const creatorId = this.spaces.get(spaceId)?.creatorId;

    if (user && userId == creatorId) {
      // Only host can remove; delete and broadcast removal
      await this.prisma.stream.delete({
        where: {
          id: streamId,
          spaceId: spaceId,
        },
      });

      await this.publisher.publish(
        spaceId,
        JSON.stringify({
          type: "remove-song",
          data: {
            streamId,
            spaceId,
          },
        }),
      );
    } else {
      user?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: {
              message: "You cant remove the song . You are not the host",
            },
          }),
        );
      });
    }
  }

  publishPlayNext(spaceId: string) {
    const space = this.spaces.get(spaceId);
    space?.users.forEach((user, userId) => {
      user?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: `play-next/${spaceId}`,
          }),
        );
      });
    });
  }

  async payAndPlayNext(spaceId: string, userId: string, url: string) {
    const creatorId = this.spaces.get(spaceId)?.creatorId;
    console.log("payAndPlayNext", creatorId, userId);
    let targetUser = this.users.get(userId);
    if (!targetUser || !creatorId) {
      return;
    }

    const extractedId = getVideoId(url);

    if (!extractedId) {
      targetUser?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: { message: "Invalid YouTube URL" },
          }),
        );
      });
      return;
    }

    const res = await youtubesearchapi.GetVideoDetails(extractedId);

    if (res.thumbnail) {
      const thumbnails = res.thumbnail.thumbnails;
      thumbnails.sort((a: { width: number }, b: { width: number }) =>
        a.width < b.width ? -1 : 1,
      );
      // Create immediate-play stream and update currentStream atomically
      const stream = await this.prisma.stream.create({
        data: {
          id: crypto.randomUUID(),
          userId: creatorId,
          url: url,
          extractedId,
          type: "Youtube",
          addedBy: userId,
          title: res.title ?? "Cant find video",
          // smallImg: video.thumbnails.medium.url,
          // bigImg: video.thumbnails.high.url,
          smallImg:
            (thumbnails.length > 1
              ? thumbnails[thumbnails.length - 2].url
              : thumbnails[thumbnails.length - 1].url) ??
            "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
          bigImg:
            thumbnails[thumbnails.length - 1].url ??
            "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
          spaceId: spaceId,
        },
      });
      // update currentStream
      await Promise.all([
        this.prisma.currentStream.upsert({
          where: {
            spaceId: spaceId,
          },
          update: {
            spaceId: spaceId,
            userId,
            streamId: stream.id,
          },
          create: {
            id: crypto.randomUUID(),
            spaceId: spaceId,
            userId,
            streamId: stream.id,
          },
        }),
        this.prisma.stream.update({
          where: {
            id: stream.id,
          },
          data: {
            played: true,
            playedTs: new Date(),
          },
        }),
      ]);
      await this.publisher.publish(
        spaceId,
        JSON.stringify({
          type: "play-next",
        }),
      );
    }
  }

  async adminPlayNext(spaceId: string, userId: string) {
    const creatorId = this.spaces.get(spaceId)?.creatorId;
    console.log("adminPlayNext", creatorId, userId);
    let targetUser = this.users.get(userId);
    if (!targetUser) {
      return;
    }

    if (targetUser.userId !== creatorId) {
      // Only host can force-skip
      targetUser.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: {
              message: "You can't perform this action.",
            },
          }),
        );
      });
      return;
    }

    const mostUpvotedStream = await this.prisma.stream.findFirst({
      where: {
        played: false,
        spaceId: spaceId,
      },
      orderBy: {
        upvotes: {
          _count: "desc",
        },
      },
    });

    if (!mostUpvotedStream) {
      targetUser.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: {
              message: "Please add video in queue",
            },
          }),
        );
      });
      return;
    }

    await Promise.all([
      this.prisma.currentStream.upsert({
        where: {
          spaceId: spaceId,
        },
        update: {
          spaceId: spaceId,
          userId,
          streamId: mostUpvotedStream.id,
        },
        create: {
          spaceId: spaceId,
          userId,
          streamId: mostUpvotedStream.id,
        },
      }),
      this.prisma.stream.update({
        where: {
          id: mostUpvotedStream.id,
        },
        data: {
          played: true,
          playedTs: new Date(),
        },
      }),
    ]);

    let previousQueueLength = parseInt(
      (await this.redisClient.get(`queue-length-${spaceId}`)) || "1",
      10,
    );
    if (previousQueueLength) {
      await this.redisClient.set(
        `queue-length-${spaceId}`,
        previousQueueLength - 1,
      );
    }

    await this.publisher.publish(
      spaceId,
      JSON.stringify({
        type: "play-next",
      }),
    );
  }

  publishNewVote(
    spaceId: string,
    streamId: string,
    vote: "upvote" | "downvote",
    votedBy: string,
  ) {
    console.log(process.pid + " publishNewVote");
    const spaces = this.spaces.get(spaceId);
    spaces?.users.forEach((user, userId) => {
      user?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: `new-vote/${spaceId}`,
            data: {
              vote,
              streamId,
              votedBy,
              spaceId,
            },
          }),
        );
      });
    });
  }

  async adminCastVote(
    creatorId: string,
    userId: string,
    streamId: string,
    vote: string,
    spaceId: string,
  ) {
    console.log(process.pid + " adminCastVote");
    if (vote === "upvote") {
      // Record vote then throttle user for a time window
      await this.prisma.upvote.create({
        data: {
          id: crypto.randomUUID(),
          userId,
          streamId,
        },
      });
    } else {
      await this.prisma.upvote.delete({
        where: {
          userId_streamId: {
            userId,
            streamId,
          },
        },
      });
    }
    await this.redisClient.set(
      `lastVoted-${spaceId}-${userId}`,
      new Date().getTime(),
      {
        EX: TIME_SPAN_FOR_VOTE / 1000,
      },
    );

    await this.publisher.publish(
      spaceId,
      JSON.stringify({
        type: "new-vote",
        data: { streamId, vote, votedBy: userId },
      }),
    );
  }

  async castVote(
    userId: string,
    streamId: string,
    vote: "upvote" | "downvote",
    spaceId: string,
  ) {
    console.log(process.pid + " castVote");
    const space = this.spaces.get(spaceId);
    const currentUser = this.users.get(userId);
    const creatorId = this.spaces.get(spaceId)?.creatorId;
    const isCreator = currentUser?.userId === creatorId;

    if (!space || !currentUser) {
      return;
    }
    if (!isCreator) {
      const lastVoted = await this.redisClient.get(
        `lastVoted-${spaceId}-${userId}`,
      );

      if (lastVoted) {
        currentUser?.ws.forEach((ws) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: {
                message: "You can vote after 20 mins",
              },
            }),
          );
        });
        return;
      }
    }

    await this.queue.add("cast-vote", {
      creatorId,
      userId,
      streamId,
      vote,
      spaceId: spaceId,
    });
  }

  publishNewStream(spaceId: string, data: any) {
    // Broadcast a new queue entry to every socket in the space
    console.log(process.pid + ": publishNewStream");
    console.log("Publish New Stream", spaceId);
    const space = this.spaces.get(spaceId);

    if (space) {
      space?.users.forEach((user, userId) => {
        user?.ws.forEach((ws) => {
          ws.send(
            JSON.stringify({
              type: `new-stream/${spaceId}`,
              data: data,
            }),
          );
        });
      });
    }
  }

  async adminAddStreamHandler(
    spaceId: string,
    userId: string,
    url: string,
    existingActiveStream: number,
  ) {
    console.log(process.pid + " adminAddStreamHandler");
    console.log("adminAddStreamHandler", spaceId);
    const room = this.spaces.get(spaceId);
    const currentUser = this.users.get(userId);

    if (!room || typeof existingActiveStream !== "number") {
      return;
    }

    const extractedId = getVideoId(url);

    if (!extractedId) {
      currentUser?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: { message: "Invalid YouTube URL" },
          }),
        );
      });
      return;
    }

    await this.redisClient.set(
      `queue-length-${spaceId}`,
      existingActiveStream + 1,
    );

    const res = await youtubesearchapi.GetVideoDetails(extractedId);

    if (res.thumbnail) {
      const thumbnails = res.thumbnail.thumbnails;
      thumbnails.sort((a: { width: number }, b: { width: number }) =>
        a.width < b.width ? -1 : 1,
      );
      // Persist stream, flag duplicates, and notify listeners
      const stream = await this.prisma.stream.create({
        data: {
          id: crypto.randomUUID(),
          userId: userId,
          url: url,
          extractedId,
          type: "Youtube",
          addedBy: userId,
          title: res.title ?? "Cant find video",
          // smallImg: video.thumbnails.medium.url,
          // bigImg: video.thumbnails.high.url,
          smallImg:
            (thumbnails.length > 1
              ? thumbnails[thumbnails.length - 2].url
              : thumbnails[thumbnails.length - 1].url) ??
            "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
          bigImg:
            thumbnails[thumbnails.length - 1].url ??
            "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
          spaceId: spaceId,
        },
      });

      await this.redisClient.set(`${spaceId}-${url}`, new Date().getTime(), {
        EX: TIME_SPAN_FOR_REPEAT / 1000,
      });

      await this.redisClient.set(
        `lastAdded-${spaceId}-${userId}`,
        new Date().getTime(),
        {
          EX: TIME_SPAN_FOR_QUEUE / 1000,
        },
      );

      await this.publisher.publish(
        spaceId,
        JSON.stringify({
          type: "new-stream",
          data: {
            ...stream,
            hasUpvoted: false,
            upvotes: 0,
          },
        }),
      );
    } else {
      currentUser?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: {
              message: "Video not found",
            },
          }),
        );
      });
    }
  }

  async adminAddPlaylistHandler(
    spaceId: string,
    userId: string,
    playlistUrl: string,
  ) {
    const currentUser = this.users.get(userId);
    try {
      const videoUrls = await getPlaylistVideoUrls(playlistUrl);

      let currentQueueLength = parseInt(
        (await this.redisClient.get(`queue-length-${spaceId}`)) || "0",
        10,
      );

      // Fall back to the database when the Redis cache is empty or stale.
      if (!currentQueueLength) {
        currentQueueLength = await this.prisma.stream.count({
          where: {
            spaceId,
            played: false,
          },
        });
      }

      const remainingSlots = MAX_QUEUE_LENGTH - currentQueueLength;
      console.log()
      if (remainingSlots <= 0) {
        currentUser?.ws?.forEach((ws: WebSocket) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: {
                message: "Queue limit reached",
              },
            }),
          );
        });

        return;
      }

      console.log(playlistUrl, currentUser);
      const candidateUrls = videoUrls.slice(0, remainingSlots);
      const keys = candidateUrls.map((url) => `${spaceId}-${url}`);
      const duplicateFlags = await this.redisClient.mGet(keys);

      const filteredUrls = candidateUrls.filter(
        (_, index) => !duplicateFlags[index],
      );

      const items = filteredUrls
        .map((url) => ({ url, extractedId: getVideoId(url) }))
        .filter((item) => item.extractedId);

      const result = await Promise.allSettled(
        items.map((item) => youtubesearchapi.GetVideoDetails(item.extractedId)),
      );
      const successfulItems = result
        .map((result, index) => {
          if (result.status !== "fulfilled") {
            return null;
          }

          return {
            item: items[index],
            details: result.value,
          };
        })
        .filter(
          (value): value is { item: (typeof items)[number]; details: any } =>
            value !== null,
        );


      const validItems = successfulItems.filter(({ item }) => item.extractedId);

      if (!validItems.length) {
        currentUser?.ws?.forEach((ws: WebSocket) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: {
                message: "No valid songs from the playlist could be added",
              },
            }),
          );
        });
        return;
      }

      const streamRows = validItems.map(({ item, details }) => {
        const thumbs = details.thumbnail?.thumbnails ?? [];
        const lastThumb = thumbs[thumbs.length - 1]?.url ?? "";

        return {
          id: crypto.randomUUID(),
          userId,
          addedBy: userId,
          url: item.url,
          extractedId: item.extractedId as string,
          type: StreamType.Youtube,
          title: details.title ?? "Cant find video",
          smallImg: lastThumb,
          bigImg: lastThumb,
          spaceId,
        };
      });

      await this.prisma.stream.createMany({
        data: streamRows,
      });

      const multi = this.redisClient.multi();

      for (const row of streamRows) {
        multi.set(`${spaceId}-${row.url}`, Date.now().toString(), {
          EX: TIME_SPAN_FOR_REPEAT / 1000,
        });
      }

      multi.set(`lastAdded-${spaceId}-${userId}`, Date.now().toString(), {
        EX: TIME_SPAN_FOR_QUEUE / 1000,
      });

      multi.set(
        `queue-length-${spaceId}`,
        currentQueueLength + streamRows.length,
      );

      await multi.exec();

      for (const stream of streamRows) {
        await this.publisher.publish(
          spaceId,
          JSON.stringify({
            type: "new-stream",
            data: {
              ...stream,
              hasUpvoted: false,
              upvotes: 0,
            },
          }),
        );
      }

      const skippedForCapacity = Math.max(videoUrls.length - candidateUrls.length, 0);
      const skippedAsDuplicates = candidateUrls.length - filteredUrls.length;
      const skippedAsInvalid = filteredUrls.length - streamRows.length;
      const skippedCount =
        skippedForCapacity + skippedAsDuplicates + skippedAsInvalid;
      console.log()
      currentUser?.ws?.forEach((ws: WebSocket) => {
        ws.send(
          JSON.stringify({
            type: "success",
            data: {
              message:
                skippedCount > 0
                  ? `Added ${streamRows.length} songs from playlist, skipped ${skippedCount}`
                  : `Added ${streamRows.length} songs from playlist`,
            },
          }),
        );
      });
    } catch (e) {
      console.log(e);
      currentUser?.ws?.forEach((ws: WebSocket) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: {
              message: "Failed to add playlist to queue",
            },
          }),
        );
      });
    }

  }

  async addPlaylistToQueue(
    spaceId: string,
    currentUserId: string,
    playlistUrl: string,
  ) {
    console.log(process.pid + ": addPlaylistToQueue");
    console.log("addPlaylistToQueue", spaceId, currentUserId, playlistUrl);

    const space = this.spaces.get(spaceId);
    const currentUser = this.users.get(currentUserId);
    const creatorId = space?.creatorId;
    const isCreator = currentUserId === creatorId;

    if (!space || !currentUser) {
      console.log("Room or User not defined");
      return;
    }

    // Get current queue length
    let previousQueueLength = parseInt(
      (await this.redisClient.get(`queue-length-${spaceId}`)) || "0",
      10,
    );

    if (!previousQueueLength) {
      previousQueueLength = await this.prisma.stream.count({
        where: {
          spaceId,
          played: false,
        },
      });
    }

    // Non-creator restrictions (checked ONCE)
    if (!isCreator) {
      const lastAdded = await this.redisClient.get(
        `lastAdded-${spaceId}-${currentUserId}`,
      );

      if (lastAdded) {
        currentUser.ws.forEach((ws) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: { message: "You can add again after 20 min." },
            }),
          );
        });
        return;
      }

      if (previousQueueLength >= MAX_QUEUE_LENGTH) {
        currentUser.ws.forEach((ws) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: { message: "Queue limit reached" },
            }),
          );
        });
        return;
      }
    }

    // 🔹 Fetch playlist songs
    const videoUrls = await getPlaylistVideoUrls(playlistUrl);

    if (!videoUrls.length) {
      currentUser.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: { message: "Playlist has no videos" },
          }),
        );
      });
      return;
    }

    await this.queue.add("add-playlist-to-queue", {
      spaceId,
      userId: currentUserId,
      playlistUrl,
    });
  }

  async addToQueue(spaceId: string, currentUserId: string, url: string) {
    console.log(process.pid + ": addToQueue");

    // Lightweight validation before pushing work onto the queue
    const space = this.spaces.get(spaceId);
    const currentUser = this.users.get(currentUserId);
    const creatorId = this.spaces.get(spaceId)?.creatorId;
    const isCreator = currentUserId === creatorId;

    if (!space || !currentUser) {
      console.log("433: Room or User not defined");
      return;
    }

    if (!isValidYoutubeURL(url)) {
      currentUser?.ws.forEach((ws) => {
        ws.send(
          JSON.stringify({
            type: "error",
            data: { message: "Invalid YouTube URL" },
          }),
        );
      });
      return;
    }

    let previousQueueLength = parseInt(
      (await this.redisClient.get(`queue-length-${spaceId}`)) || "0",
      10,
    );

    // If cache miss, count directly to keep limits accurate
    if (!previousQueueLength) {
      previousQueueLength = await this.prisma.stream.count({
        where: {
          spaceId: spaceId,
          played: false,
        },
      });
    }

    if (!isCreator) {
      let lastAdded = await this.redisClient.get(
        `lastAdded-${spaceId}-${currentUserId}`,
      );

      if (lastAdded) {
        currentUser.ws.forEach((ws) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: {
                message: "You can add again after 20 min.",
              },
            }),
          );
        });
        return;
      }
      let alreadyAdded = await this.redisClient.get(`${spaceId}-${url}`);

      if (alreadyAdded) {
        currentUser.ws.forEach((ws) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: {
                message: "This song is blocked for 1 hour",
              },
            }),
          );
        });
        return;
      }

      if (previousQueueLength >= MAX_QUEUE_LENGTH) {
        currentUser.ws.forEach((ws) => {
          ws.send(
            JSON.stringify({
              type: "error",
              data: {
                message: "Queue limit reached",
              },
            }),
          );
        });
        return;
      }
    }

    await this.queue.add("add-to-queue", {
      spaceId,
      userId: currentUser.userId,
      url,
      existingActiveStream: previousQueueLength,
    });
  }

  disconnect(ws: WebSocket) {
    // Remove a socket from tracking and drop empty users/room memberships
    console.log(process.pid + ": disconnect");
    let userId: string | null = null;
    const spaceId = this.wstoSpace.get(ws);
    this.users.forEach((user, id) => {
      const wsIndex = user.ws.indexOf(ws);

      if (wsIndex !== -1) {
        userId = id;
        user.ws.splice(wsIndex, 1);
      }
      if (user.ws.length === 0) {
        this.users.delete(id);
      }
    });

    if (userId && spaceId) {
      const space = this.spaces.get(spaceId);
      if (space) {
        const updatedUsers = new Map(
          Array.from(space.users).filter(([usrId]) => userId !== usrId),
        );
        this.spaces.set(spaceId, {
          ...space,
          users: updatedUsers,
        });
      }
    }
  }
}

type User = {
  userId: string;
  ws: WebSocket[];
  token: string;
};

type Space = {
  creatorId: string;
  users: Map<String, User>;
};
