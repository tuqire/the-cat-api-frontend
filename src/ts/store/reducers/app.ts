import { STARTED_LOADING, FINISHED_LOADING } from '~/store/actions';

const DEFAULT_STATE: IAppState = {
  loadingCounter: 0,
};

export default (state = DEFAULT_STATE, action: IGenericAction) : IAppState => {
  switch (action.type) {
    case STARTED_LOADING: {
      return {
        loadingCounter: state.loadingCounter + 1,
      };
    }

    case FINISHED_LOADING: {
      return {
        loadingCounter: state.loadingCounter - 1,
      };
    }

    default: {
      return state;
    }
  }
};

export const selectIsLoading = (state: IRootState): boolean => state.app.loadingCounter > 0;
