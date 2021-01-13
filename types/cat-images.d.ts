interface ICatImage {
  id: number;
  url: string;
  height: number;
  width: number;
  isFavorite?: boolean;
  numVotes?: number;
}

interface IFavoriteCatImage {
  id: number;
  image_id: number;
  user_id: string;
}

interface ICatImageVote {
  id: number;
  image_id: number;
  value: number;
}
