import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  try {
    const albums = await prisma.album.findMany();
    res.status(200).json({ albums });
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch albums' });
  }
}
