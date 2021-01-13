import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  startedLoading,
  finishedLoading,
  saveUsersCatImageUploadError,
} from '~/store/actions';
import { ROUTES } from '~/constants';

export default function* submitUsersCatImageSaga(action: IUploadFileAction) {
  try {
    yield put(startedLoading());

    const formData = new FormData();
    formData.append('file', action.payload.file);

    yield call(
      Axios.post,
      '/api/images/upload',
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    window.location.assign(ROUTES.CAT_IMAGES.VIEW);
  } catch (error) {
    console.error({ error });

    yield put(saveUsersCatImageUploadError(error.response.data.message));
  } finally {
    yield put(finishedLoading());
  }
}
