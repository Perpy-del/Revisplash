import { fetchPhotos } from '@/lib/unsplash';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const photos = await fetchPhotos(15);
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
}
