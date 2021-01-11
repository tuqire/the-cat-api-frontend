export const SET_IS_LOADING = 'SET_IS_LOADING';

const SetIsLoading = (isLoading: boolean): ILoadingAction => ({
  type: SET_IS_LOADING,
  payload: {
    isLoading,
  },
});

export const startedLoading = (): ILoadingAction => SetIsLoading(true);

export const finishedLoading = (): ILoadingAction => SetIsLoading(false);
