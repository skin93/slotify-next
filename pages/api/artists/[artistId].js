import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const artistId = +req.query.artistId;

  try {
    const artist = await prisma.artist.findUnique({
      where: {
        id: artistId,
      },
      include: { songs: true },
    });
    res.status(200).json({ artist });
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch artist' });
  }
}
