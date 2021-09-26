import { PrismaClient } from '.prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient({ log: ['query'] });
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
  } finally {
    await prisma.$disconnect();
  }
}
