import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const playlistId = +req.query.playlistId;

  if (req.method === 'DELETE') {
    try {
      const playlist = await prisma.playlist.delete({
        where: {
          id: playlistId,
        },
      });
      res.status(200).json({ message: 'Playlist was successfully deleted' });
    } catch (e) {
      res.status(500).json({ error: 'Unable to delete playlist' });
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
