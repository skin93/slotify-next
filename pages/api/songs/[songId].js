import { PrismaClient } from '.prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient({ log: ['query'] });
  const songId = +req.query.songId;

  try {
    const song = await prisma.song.findUnique({
      where: {
        id: songId,
      },
      include: { genre: true, artist: true, album: true },
    });
    res.status(200).json({ song });
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch song' });
  } finally {
    await prisma.$disconnect();
  }
}
