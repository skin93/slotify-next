import { PrismaClient } from '.prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient({ log: ['query'] });
  const { name, username } = req.body;

  if (req.method === 'POST') {
    handlePOST(res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }

  async function handlePOST(res) {
    try {
      const playlist = await prisma.playlist.create({
        data: {
          name: name,
          owner: username,
        },
      });
      res.status(200).json({ playlist });
    } catch (err) {
      res.status(500).json({ error: err.message });
    } finally {
      await prisma.$disconnect();
    }
  }
}
