interface IAppState {
  loadingCounter: number;
}

interface IUsersState {
  catImages: {
    uploaded: {
      wereLoaded: boolean;
      data: ICatImage[];
    };
    favorites: {
      wereLoaded: boolean;
      data: IFavoriteCatImage[];
    };
  };
}

interface IRootState {
  app: IAppState;
  user: IUsersState;
}
