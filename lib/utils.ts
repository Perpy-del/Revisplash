import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const UNSPLASH_ACCESS_KEY: string = 'mjnrxC099Gpi_gptvO9fW_VoNPTW4UN3Hii-FC9WXEQ'
