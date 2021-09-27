import { PrismaClient } from '.prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient({ log: ['query'] });
  const playlistId = +req.query.playlistId;
  const songId = +req.query.songId;

  if (req.method === 'DELETE') {
    handleDELETE(res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }

  async function handleDELETE(res) {
    try {
      const row = await prisma.playlistsOnSongs.findUnique({
        where: {
          songId_playlistId: { songId, playlistId },
        },
      });

      if (!row) {
        throw new Error('Song or playlist does not exist');
      }

      await prisma.playlistsOnSongs.delete({
        where: {
          songId_playlistId: { songId, playlistId },
        },
      });
      res
        .status(200)
        .json({ messgae: 'Song was successfully removed from the playlist' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    } finally {
      await prisma.$disconnect();
    }
  }
}
