interface IAppState {
  loadingCounter: number;
}

interface IUsersState {
  catImages: ICatImage[];
}

interface IRootState {
  app: IAppState;
  user: IUsersState;
}
