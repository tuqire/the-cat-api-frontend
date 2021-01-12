import { SAVE_USERS_CAT_IMAGES } from '~/store/actions';

const DEFAULT_STATE: IUsersState['catImages'] = [];

export default (state = DEFAULT_STATE, action: ISaveCatImagesAction) : IUsersState['catImages'] => {
  switch (action.type) {
    case SAVE_USERS_CAT_IMAGES: {
      return action.payload.catImages;
    }

    default: {
      return state;
    }
  }
};

export const selectUsersCatImages = (state: IRootState): IUsersState['catImages'] => state.user.catImages;
