interface IAppState {
  loadingCounter: number;
}

interface IUsersState {
  catImages: {
    uploaded: ICatImage[];
    favorites: IFavoriteCatImage[];
  };
}

interface IRootState {
  app: IAppState;
  user: IUsersState;
}
