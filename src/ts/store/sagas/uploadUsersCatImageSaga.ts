import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { startedLoading, finishedLoading, getUsersCatImages } from '~/store/actions';

export default function* uploadUsersCatImageSaga(action: IUploadFileAction) {
  try {
    yield put(startedLoading());

    const formData = new FormData();
    formData.append('file', action.payload.file);

    yield call(
      Axios.post,
      '/api/images/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    yield put(getUsersCatImages());
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(finishedLoading());
  }
}
