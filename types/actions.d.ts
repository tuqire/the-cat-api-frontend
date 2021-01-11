interface IGenericAction {
  type: string;
}

interface ILoadingAction {
  type: string;
  payload: {
    isLoading: boolean;
  };
}
