interface ICatImage {
  id: number;
  url: string;
  height: number;
  width: number;
  isFavorite?: boolean;
}

interface IFavoriteCatImage {
  id: number;
  image_id: number;
  user_id: string;
}
