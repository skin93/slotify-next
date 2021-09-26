import { PrismaClient } from '.prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const albums = await prisma.album.findMany();
    res.status(200).json({ albums });
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch albums' });
  } finally {
    await prisma.$disconnect();
  }
}
