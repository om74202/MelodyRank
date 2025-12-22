const YT_API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";

function extractPlaylistId(url: string): string | null {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("list");
  } catch {
    return null;
  }
}

export async function getPlaylistVideoUrls(
  playlistUrl: string
): Promise<string[]> {
  const playlistId = extractPlaylistId(playlistUrl);

  if (!playlistId) {
    throw new Error("Invalid playlist URL");
  }

  const videoUrls: string[] = [];
  let nextPageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      part: "contentDetails",
      playlistId,
      maxResults: "50",
      key: process.env.YOUTUBE_API_KEY!, // server-only
    });

    if (nextPageToken) {
      params.set("pageToken", nextPageToken);
    }

    const res = await fetch(`${YT_API_URL}?${params.toString()}`, {
      method: "GET",
      cache: "no-store", // 🔥 important for real-time playlists
    });

    if (!res.ok) {
      throw new Error(`YouTube API error: ${res.status}`);
    }

    const data = await res.json();

    for (const item of data.items ?? []) {
      const videoId = item.contentDetails?.videoId;
      if (videoId) {
        videoUrls.push(`https://www.youtube.com/watch?v=${videoId}`);
      }
    }

    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  return videoUrls;
}
