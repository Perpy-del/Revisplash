// 'use server';

import { UNSPLASH_ACCESS_KEY } from './utils';

export async function fetchRandomPhotos(count = 4) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=${count}&client_id=${UNSPLASH_ACCESS_KEY}`
  );

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  // Parse JSON only if the response is not an error page
  const photos = JSON.parse(responseText);
  return photos;
}

export async function fetchPhotos(page: number = 1, perPage: number = 12) {
  const response = await fetch(
    `https://api.unsplash.com/photos?client_id=${UNSPLASH_ACCESS_KEY}&page=${page}&per_page=${perPage}`
  );

  const responseText = await response.text();
  console.log(responseText)

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  // Parse JSON only if the response is not an error page
  const photos = JSON.parse(responseText);
  return photos;
}

export async function fetchAPhoto(id: string | null) {
  const response = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${UNSPLASH_ACCESS_KEY}`
  );

  const responseText = await response.text();
  console.log(responseText);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  // Parse JSON only if the response is not an error page
  const photos = JSON.parse(responseText);
  return photos;
}
