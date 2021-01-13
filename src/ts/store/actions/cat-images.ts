export const FETCH_USERS_CAT_IMAGES = 'FETCH_USERS_CAT_IMAGES';
export const fetchUsersCatImages = (): IGenericAction => ({
  type: FETCH_USERS_CAT_IMAGES,
});

// TODO: change SAVE to CACHE
export const SAVE_USERS_CAT_IMAGES = 'SAVE_USERS_CAT_IMAGES';
export const saveUsersCatImages = (catImages: ICatImage[]): ICatImagesAction => ({
  type: SAVE_USERS_CAT_IMAGES,
  payload: {
    catImages,
  },
});

export const SAVE_USER_CAT_IMAGE_UPLOAD_ERROR = 'SAVE_USER_CAT_IMAGE_UPLOAD_ERROR';
export const saveUsersCatImageUploadError = (errorMessage: string): IErrorAction => ({
  type: SAVE_USER_CAT_IMAGE_UPLOAD_ERROR,
  payload: {
    errorMessage,
  },
});

export const SUBMIT_FAVORITE_CAT_IMAGE = 'SUBMIT_FAVORITE_CAT_IMAGE';
export const submitFavoriteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SUBMIT_FAVORITE_CAT_IMAGE,
  payload: {
    catImage,
  },
});

export const SUBMIT_UNFAVORITE_CAT_IMAGE = 'SUBMIT_UNFAVORITE_CAT_IMAGE';
export const submitUnfavoriteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SUBMIT_UNFAVORITE_CAT_IMAGE,
  payload: {
    catImage,
  },
});

export const SUBMIT_UP_VOTE_CAT_IMAGE = 'SUBMIT_UP_VOTE_CAT_IMAGE';
export const submitUpVoteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SUBMIT_UP_VOTE_CAT_IMAGE,
  payload: {
    catImage,
  },
});

export const SUBMIT_DOWN_VOTE_CAT_IMAGE = 'SUBMIT_DOWN_VOTE_CAT_IMAGE';
export const submitDownVoteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SUBMIT_DOWN_VOTE_CAT_IMAGE,
  payload: {
    catImage,
  },
});

export const FETCH_USERS_CAT_IMAGE_VOTES = 'FETCH_USERS_CAT_IMAGE_VOTES';
export const fetchUsersCatImageVotes = (): IGenericAction => ({
  type: FETCH_USERS_CAT_IMAGE_VOTES,
});

export const SAVE_USERS_CAT_IMAGE_VOTES = 'SAVE_USERS_CAT_IMAGE_VOTES';
export const saveUsersCatImageVotes = (catImageVotes: ICatImageVote[]): ICatImageVotesAction => ({
  type: SAVE_USERS_CAT_IMAGE_VOTES,
  payload: {
    catImageVotes,
  },
});

export const FETCH_USERS_FAVORITE_CAT_IMAGES = 'FETCH_USERS_FAVORITE_CAT_IMAGES';
export const fetchUsersFavoriteCatImages = (): IGenericAction => ({
  type: FETCH_USERS_FAVORITE_CAT_IMAGES,
});

export const SAVE_USERS_FAVORITE_CAT_IMAGES = 'SAVE_USERS_FAVORITE_CAT_IMAGES';
export const saveUsersFavoriteCatImages = (favoriteCatImages: IFavoriteCatImage[]): IFavoriteCatImagesAction => ({
  type: SAVE_USERS_FAVORITE_CAT_IMAGES,
  payload: {
    favoriteCatImages,
  },
});

export const SUBMIT_USERS_CAT_IMAGE = 'SUBMIT_USERS_CAT_IMAGE';
export const submitUsersCatImage = (catImage: File): IUploadFileAction => ({
  type: SUBMIT_USERS_CAT_IMAGE,
  payload: {
    file: catImage,
  },
});
