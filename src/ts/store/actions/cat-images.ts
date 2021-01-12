export const GET_USERS_CAT_IMAGES = 'GET_USERS_CAT_IMAGES';
export const getUsersCatImages = (): IGenericAction => ({
  type: GET_USERS_CAT_IMAGES,
});

export const SAVE_USERS_CAT_IMAGES = 'SAVE_USERS_CAT_IMAGES';
export const saveUsersCatImages = (catImages: ICatImage[]): ISaveCatImagesAction => ({
  type: SAVE_USERS_CAT_IMAGES,
  payload: {
    catImages,
  },
});


export const UPLOAD_USERS_CAT_IMAGE = 'UPLOAD_USERS_CAT_IMAGE';
export const uploadUsersCatImage = (catImage: File): IUploadFileAction => ({
  type: UPLOAD_USERS_CAT_IMAGE,
  payload: {
    file: catImage,
  },
});
