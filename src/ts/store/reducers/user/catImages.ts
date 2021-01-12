import { SAVE_USERS_CAT_IMAGES, SAVE_USERS_FAVORITE_CAT_IMAGES } from '~/store/actions';

const DEFAULT_STATE: IUsersState['catImages'] = {
  uploaded: [],
  favorites: [],
};

const isFavoriteCatImage = (catImage: ICatImage, favoriteCatImages: IFavoriteCatImage[]): boolean => (
  favoriteCatImages.some((favoriteCatImage) => favoriteCatImage.image_id === catImage.id)
);

export default (state = DEFAULT_STATE, action: ICatImagesAction | IFavoriteCatImagesAction) : IUsersState['catImages'] => {
  switch (action.type) {
    case SAVE_USERS_CAT_IMAGES: {
      const castedAction = action as ICatImagesAction;

      return {
        ...state,
        uploaded: [
          ...castedAction.payload.catImages.map((catImage) => ({
            ...catImage,
            isFavorite: isFavoriteCatImage(catImage, state.favorites),
          })),
        ],
      };
    }

    case SAVE_USERS_FAVORITE_CAT_IMAGES: {
      const castedAction = action as IFavoriteCatImagesAction;

      return {
        ...state,
        favorites: castedAction.payload.favoriteCatImages,
        uploaded: [
          ...state.uploaded.map((catImage) => ({
            ...catImage,
            isFavorite: isFavoriteCatImage(catImage, castedAction.payload.favoriteCatImages),
          })),
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export const selectUsersCatImages = (state: IRootState): ICatImage[] => state.user.catImages.uploaded;

export const selectUsersFavoriteCatImages = (state: IRootState): IFavoriteCatImage[] => state.user.catImages.favorites;
export const selectUsersFavoriteCatImage = (state: IRootState, imageId: number): IFavoriteCatImage | undefined => (
  selectUsersFavoriteCatImages(state).find((favoriteCatImage) => favoriteCatImage.image_id === imageId)
);
