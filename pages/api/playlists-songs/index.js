import { PrismaClient } from '.prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient({ log: ['query'] });
  const { songId, playlistId } = req.body;

  if (req.method === 'POST') {
    handlePOST(res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }

  async function handlePOST(res) {
    try {
      if (!songId) {
        throw new Error('songId must be passed');
      }

      if (!playlistId) {
        throw new Error('playlistId must be passed');
      }

      const playlist = await prisma.playlist.findUnique({
        where: {
          id: playlistId,
        },
      });

      if (!playlist) {
        throw new Error('Playlist does not exist');
      }

      const row = await prisma.playlistsOnSongs.findUnique({
        where: {
          songId_playlistId: { songId, playlistId },
        },
      });

      if (row) {
        throw new Error('Can not add the same song twice');
      }

      const aggregation = await prisma.playlistsOnSongs.aggregate({
        _max: {
          playlistOrder: true,
        },
        where: {
          playlistId,
        },
      });

      const newRow = await prisma.playlistsOnSongs.create({
        data: {
          songId,
          playlistId,
          playlistOrder:
            aggregation._max.playlistOrder === null
              ? 0
              : aggregation._max.playlistOrder + 1,
        },
      });
      res.status(200).json({ newRow });
    } catch (err) {
      res.status(500).json({ error: err.message });
    } finally {
      await prisma.$disconnect();
    }
  }
}
