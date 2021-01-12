export const GET_USERS_CAT_IMAGES = 'GET_USERS_CAT_IMAGES';
export const getUsersCatImages = (): IGenericAction => ({
  type: GET_USERS_CAT_IMAGES,
});

// TODO: change SAVE to CACHE
export const SAVE_USERS_CAT_IMAGES = 'SAVE_USERS_CAT_IMAGES';
export const saveUsersCatImages = (catImages: ICatImage[]): ICatImagesAction => ({
  type: SAVE_USERS_CAT_IMAGES,
  payload: {
    catImages,
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

// TODO: change GET to FETCH
export const GET_USERS_FAVORITE_CAT_IMAGES = 'GET_USERS_FAVORITE_CAT_IMAGES';
export const getUsersFavoriteCatImages = (): IGenericAction => ({
  type: GET_USERS_FAVORITE_CAT_IMAGES,
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
