import { WebSocket } from "ws";

// Simple YouTube URL guard: keeps only standard watch/embed/short links and
// extracts the 11 character video id so we don't enqueue bad URLs.
const YT_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/(?:watch\?(?!.*\blist=)(?:.*&)?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&]\S+)?$/;

export const isValidYoutubeURL = (data: string) => {
  return data.match(YT_REGEX);
};

export const getVideoId = (url: string) => {
  return url.match(YT_REGEX)?.[1];
};

// Small helper to keep error payloads consistent for every WebSocket client
export function sendError(ws: WebSocket, message: string) {
  ws.send(JSON.stringify({ type: "error", data: { message } }));
}
