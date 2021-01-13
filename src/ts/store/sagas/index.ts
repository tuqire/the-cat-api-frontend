import { all, takeEvery } from 'redux-saga/effects';
import * as ACTIONS from '~/store/actions';
import fetchUsersCatImagesSaga from './fetchUsersCatImagesSaga';
import uploadUsersCatImageSaga from './uploadUsersCatImageSaga';
import fetchUsersFavoriteCatImagesSaga from './fetchUsersFavoriteCatImagesSaga';
import setFavoriteCatImageSaga from './setFavoriteCatImageSaga';
import setUnfavoriteCatImageSaga from './setUnfavoriteCatImageSaga';
import fetchUsersCatImageVotesSaga from './fetchUsersCatImageVotesSaga';
import setUpVoteCatImageSaga from './setUpVoteCatImageSaga';
import setDownVoteCatImageSaga from './setDownVoteCatImageSaga';

function* fetchUsersCatImagesSagaHandler() {
  yield takeEvery(ACTIONS.FETCH_USERS_CAT_IMAGES, fetchUsersCatImagesSaga);
}

function* uploadUsersCatImageSagaHandler() {
  yield takeEvery(ACTIONS.UPLOAD_USERS_CAT_IMAGE, uploadUsersCatImageSaga);
}

function* fetchUsersFavoriteCatImagesSagaHandler() {
  yield takeEvery(ACTIONS.FETCH_USERS_FAVORITE_CAT_IMAGES, fetchUsersFavoriteCatImagesSaga);
}

function* setFavoriteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_FAVORITE_CAT_IMAGE, setFavoriteCatImageSaga);
}

function* setUnfavoriteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_UNFAVORITE_CAT_IMAGE, setUnfavoriteCatImageSaga);
}

function* fetchUsersCatImageVotesSagaHandler() {
  yield takeEvery(ACTIONS.FETCH_USERS_CAT_IMAGE_VOTES, fetchUsersCatImageVotesSaga);
}

function* setUpVoteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_UP_VOTE_CAT_IMAGE, setUpVoteCatImageSaga);
}

function* setDownVoteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_DOWN_VOTE_CAT_IMAGE, setDownVoteCatImageSaga);
}

export default function* rootSaga() {
  yield all([
    fetchUsersCatImagesSagaHandler(),
    uploadUsersCatImageSagaHandler(),
    fetchUsersFavoriteCatImagesSagaHandler(),
    setFavoriteCatImageSagaHandler(),
    setUnfavoriteCatImageSagaHandler(),
    fetchUsersCatImageVotesSagaHandler(),
    setUpVoteCatImageSagaHandler(),
    setDownVoteCatImageSagaHandler(),
  ]);
}
