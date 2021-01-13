interface IGenericAction {
  type: string;
}

interface IUploadFileAction {
  type: string;
  payload: {
    file: File;
  };
}

interface ICatImagesAction {
  type: string;
  payload: {
    catImages: ICatImage[];
  };
}

interface ICatImageAction {
  type: string;
  payload: {
    catImage: ICatImage;
  };
}

interface IFavoriteCatImagesAction {
  type: string;
  payload: {
    favoriteCatImages: IFavoriteCatImage[];
  };
}

interface IFavoriteCatImageAction {
  type: string;
  payload: {
    favoriteCatImage: IFavoriteCatImage;
  };
}

interface ICatImageVotesAction {
  type: string;
  payload: {
    catImageVotes: ICatImageVote[];
  };
}
