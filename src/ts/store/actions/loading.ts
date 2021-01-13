export const STARTED_LOADING = 'STARTED_LOADING';
export const startedLoading = (): IGenericAction => ({
  type: STARTED_LOADING,
});

export const FINISHED_LOADING = 'FINISHED_LOADING';
export const finishedLoading = (): IGenericAction => ({
  type: FINISHED_LOADING,
});
