'use server';

import { UNSPLASH_ACCESS_KEY } from '../lib/utils';

export async function fetchRandomPhotos(page = 1, perPage = 12) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${UNSPLASH_ACCESS_KEY}`
  );

  // Log the response for debugging
  const responseText = await response.text();
  console.log('Response Text:', responseText); // Log raw response

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  // Parse JSON only if the response is not an error page
  const photos = JSON.parse(responseText);
  return photos;
}

export async function fetchPhotos(page = 1, perPage = 12) {
  console.log(UNSPLASH_ACCESS_KEY);
  const response = await fetch(
    `https://api.unsplash.com/photos?client_id=${UNSPLASH_ACCESS_KEY}&page=${page}&per_page=${perPage}`
  );

  // Log the response for debugging
  const responseText = await response.text();
  console.log('Response Text:', responseText); // Log raw response

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  // Parse JSON only if the response is not an error page
  const photos = JSON.parse(responseText);
  return photos;
}
