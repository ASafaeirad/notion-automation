export const PlayListVideo = ({
  id,
  playlist,
}: {
  playlist: string;
  id: string;
}) => `https://www.youtube.com/watch?v=${id}&list=${playlist}&index=1`;

export const YoutubeVideo = ({ id }: { id: string }) =>
  `https://www.youtube.com/watch?v=${id}`;
