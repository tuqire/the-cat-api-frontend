import { all, takeEvery } from 'redux-saga/effects';
import * as ACTIONS from '~/store/actions';
import getUsersCatImagesSaga from './getUsersCatImagesSaga';
import uploadUsersCatImageSaga from './uploadUsersCatImageSaga';

function* getUsersCatImagesSagaHandler() {
  yield takeEvery(ACTIONS.GET_USERS_CAT_IMAGES, getUsersCatImagesSaga);
}

function* uploadUsersCatImageSagaHandler() {
  yield takeEvery(ACTIONS.UPLOAD_USERS_CAT_IMAGE, uploadUsersCatImageSaga);
}

export default function* rootSaga() {
  yield all([
    getUsersCatImagesSagaHandler(),
    uploadUsersCatImageSagaHandler(),
  ]);
}
