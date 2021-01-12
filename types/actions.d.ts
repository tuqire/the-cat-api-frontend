interface IGenericAction {
  type: string;
}

interface IUploadFileAction {
  type: string;
  payload: {
    file: File;
  };
}

interface ISaveCatImagesAction {
  type: string;
  payload: {
    catImages: ICatImage[];
  };
}
