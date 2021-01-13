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

// TODO: change SET to SUBMIT
export const SET_FAVORITE_CAT_IMAGE = 'SET_FAVORITE_CAT_IMAGE';
export const setFavoriteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SET_FAVORITE_CAT_IMAGE,
  payload: {
    catImage,
  },
});

export const SET_UNFAVORITE_CAT_IMAGE = 'SET_UNFAVORITE_CAT_IMAGE';
export const setUnfavoriteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SET_UNFAVORITE_CAT_IMAGE,
  payload: {
    catImage,
  },
});

// TODO: change SET to SUBMIT
export const SET_UP_VOTE_CAT_IMAGE = 'SET_UP_VOTE_CAT_IMAGE';
export const setUpVoteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SET_UP_VOTE_CAT_IMAGE,
  payload: {
    catImage,
  },
});

// TODO: change SET to SUBMIT
export const SET_DOWN_VOTE_CAT_IMAGE = 'SET_DOWN_VOTE_CAT_IMAGE';
export const setDownVoteCatImage = (catImage: ICatImage): ICatImageAction => ({
  type: SET_DOWN_VOTE_CAT_IMAGE,
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

export const UPLOAD_USERS_CAT_IMAGE = 'UPLOAD_USERS_CAT_IMAGE';
export const uploadUsersCatImage = (catImage: File): IUploadFileAction => ({
  type: UPLOAD_USERS_CAT_IMAGE,
  payload: {
    file: catImage,
  },
});
