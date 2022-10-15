interface Args {
  playlist: string;
  id: string;
}

export const PlayListVideo = ({ id, playlist }: Args) =>
  `https://www.youtube.com/watch?v=${id}&list=${playlist}&index=1`;
