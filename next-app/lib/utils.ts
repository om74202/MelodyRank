import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Shared YouTube validator so both client and API agree on what links are allowed
export const YT_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/(?:watch\?(?!.*\blist=)(?:.*&)?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&]\S+)?$/;

// `cn` is a common Next.js/shadcn helper that merges Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const YT_PLAYLIST_REGEX =
  /^(https?:\/\/)?(www\.)?youtube\.com\/playlist\?list=[\w-]+/;

