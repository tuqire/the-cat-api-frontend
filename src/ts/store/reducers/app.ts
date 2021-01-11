import { SET_IS_LOADING } from '~/store/actions';

const DEFAULT_STATE: IAppState = {
  loadingCounter: 0,
};

export default (state = DEFAULT_STATE, action: ILoadingAction) : IAppState => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return {
        loadingCounter: action.payload.isLoading ? state.loadingCounter + 1 : state.loadingCounter - 1,
      };
    }

    default: {
      return state;
    }
  }
};

export const selectIsLoading = (state: IRootState): boolean => state.app.loadingCounter > 0;
