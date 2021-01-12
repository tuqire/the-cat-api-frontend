import { all, takeEvery } from 'redux-saga/effects';
import * as ACTIONS from '~/store/actions';
import getUsersCatImagesSaga from './getUsersCatImagesSaga';
import uploadUsersCatImageSaga from './uploadUsersCatImageSaga';
import getUsersFavoriteCatImagesSaga from './getUsersFavoriteCatImagesSaga';
import setFavoriteCatImageSaga from './setFavoriteCatImageSaga';
import setUnfavoriteCatImageSaga from './setUnfavoriteCatImageSaga';

function* getUsersCatImagesSagaHandler() {
  yield takeEvery(ACTIONS.GET_USERS_CAT_IMAGES, getUsersCatImagesSaga);
}

function* uploadUsersCatImageSagaHandler() {
  yield takeEvery(ACTIONS.UPLOAD_USERS_CAT_IMAGE, uploadUsersCatImageSaga);
}

function* getUsersFavoriteCatImagesSagaHandler() {
  yield takeEvery(ACTIONS.GET_USERS_FAVORITE_CAT_IMAGES, getUsersFavoriteCatImagesSaga);
}

function* setFavoriteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_FAVORITE_CAT_IMAGE, setFavoriteCatImageSaga);
}

function* setUnfavoriteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_UNFAVORITE_CAT_IMAGE, setUnfavoriteCatImageSaga);
}

export default function* rootSaga() {
  yield all([
    getUsersCatImagesSagaHandler(),
    uploadUsersCatImageSagaHandler(),
    getUsersFavoriteCatImagesSagaHandler(),
    setFavoriteCatImageSagaHandler(),
    setUnfavoriteCatImageSagaHandler(),
  ]);
}
