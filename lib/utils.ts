import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const UNSPLASH_ACCESS_KEY: string = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY as string
