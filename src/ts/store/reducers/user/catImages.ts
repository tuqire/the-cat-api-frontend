import {
  CACHE_USERS_CAT_IMAGES,
  CACHE_USER_CAT_IMAGE_UPLOAD_ERROR,
  CACHE_USERS_FAVORITE_CAT_IMAGES,
  CACHE_USERS_CAT_IMAGE_VOTES,
} from '~/store/actions';

const DEFAULT_STATE: IUsersState['catImages'] = {
  errors: {
    upload: null,
  },
  uploaded: {
    wereLoaded: false,
    data: [],
  },
  favorites: {
    wereLoaded: false,
    data: [],
  },
  votes: {
    wereLoaded: false,
    data: [],
  },
};

const isFavoriteCatImage = (catImage: ICatImage, favoriteCatImages: IFavoriteCatImage[]): boolean => (
  favoriteCatImages.some((favoriteCatImage) => favoriteCatImage.image_id === catImage.id)
);

const calculateCatImageVotes = (catImage: ICatImage, catImageVotes: ICatImageVote[]) => (
  catImageVotes.reduce((acc, catImageVote) => {
    if (catImageVote.image_id === catImage.id) {
      return acc + (catImageVote.value || -1);
    }

    return acc;
  }, 0)
);

type ActionTypes = ICatImagesAction | IErrorAction | IFavoriteCatImagesAction | ICatImageVotesAction;

export default (state = DEFAULT_STATE, action: ActionTypes): IUsersState['catImages'] => {
  switch (action.type) {
    case CACHE_USERS_CAT_IMAGES: {
      const castedAction = action as ICatImagesAction;

      return {
        ...state,
        uploaded: {
          wereLoaded: true,
          data: [
            ...castedAction.payload.catImages.map((catImage) => ({
              ...catImage,
              isFavorite: isFavoriteCatImage(catImage, state.favorites.data),
              numVotes: calculateCatImageVotes(catImage, state.votes.data),
            })),
          ],
        },
      };
    }
    case CACHE_USER_CAT_IMAGE_UPLOAD_ERROR: {
      const castedAction = action as IErrorAction;

      return {
        ...state,
        errors: {
          upload: castedAction.payload.errorMessage,
        },
      };
    }

    case CACHE_USERS_FAVORITE_CAT_IMAGES: {
      const castedAction = action as IFavoriteCatImagesAction;

      return {
        ...state,
        favorites: {
          wereLoaded: true,
          data: castedAction.payload.favoriteCatImages,
        },
        uploaded: {
          ...state.uploaded,
          data: state.uploaded.data.map((catImage) => ({
            ...catImage,
            isFavorite: isFavoriteCatImage(catImage, castedAction.payload.favoriteCatImages),
            numVotes: calculateCatImageVotes(catImage, state.votes.data),
          })),
        },
      };
    }

    case CACHE_USERS_CAT_IMAGE_VOTES: {
      const castedAction = action as ICatImageVotesAction;

      return {
        ...state,
        votes: {
          wereLoaded: true,
          data: castedAction.payload.catImageVotes,
        },
        uploaded: {
          ...state.uploaded,
          data: state.uploaded.data.map((catImage) => ({
            ...catImage,
            isFavorite: isFavoriteCatImage(catImage, state.favorites.data),
            numVotes: calculateCatImageVotes(catImage, castedAction.payload.catImageVotes),
          })),
        },
      };
    }

    default: {
      return state;
    }
  }
};

export const selectUsersCatImages = (state: IRootState): ICatImage[] => state.user.catImages.uploaded.data;
export const selectWereUsersCatImagesLoaded = (state: IRootState): boolean => state.user.catImages.uploaded.wereLoaded;

export const selectUsersCatImageErrors = (state: IRootState): IUsersState['catImages']['errors'] => state.user.catImages.errors;

export const selectUsersFavoriteCatImages = (state: IRootState): IFavoriteCatImage[] => state.user.catImages.favorites.data;
export const selectWereUsersFavoriteCatImagesLoaded = (state: IRootState): boolean => state.user.catImages.favorites.wereLoaded;

export const selectUsersFavoriteCatImage = (state: IRootState, imageId: number): IFavoriteCatImage | undefined => (
  selectUsersFavoriteCatImages(state).find((favoriteCatImage) => favoriteCatImage.image_id === imageId)
);
