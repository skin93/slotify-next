import { PrismaClient } from '.prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient({ log: ['query'] });
  const albumId = +req.query.albumId;

  try {
    const album = await prisma.album.findUnique({
      where: {
        id: albumId,
      },
      include: { artist: true, genre: true, songs: true },
    });
    res.status(200).json({ album });
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch album' });
  } finally {
    await prisma.$disconnect();
  }
}
