import { all, takeEvery } from 'redux-saga/effects';
import * as ACTIONS from '~/store/actions';
import getUsersCatImagesSaga from './getUsersCatImagesSaga';
import uploadUsersCatImageSaga from './uploadUsersCatImageSaga';
import getUsersFavoriteCatImagesSaga from './getUsersFavoriteCatImagesSaga';
import setFavoriteCatImageSaga from './setFavoriteCatImageSaga';
import setUnfavoriteCatImageSaga from './setUnfavoriteCatImageSaga';
import getUsersCatImageVotesSaga from './getUsersCatImageVotesSaga';
import setUpVoteCatImageSaga from './setUpVoteCatImageSaga';
import setDownVoteCatImageSaga from './setDownVoteCatImageSaga';

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

function* getUsersCatImageVotesSagaHandler() {
  yield takeEvery(ACTIONS.GET_USERS_CAT_IMAGE_VOTES, getUsersCatImageVotesSaga);
}

function* setUpVoteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_UP_VOTE_CAT_IMAGE, setUpVoteCatImageSaga);
}

function* setDownVoteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SET_DOWN_VOTE_CAT_IMAGE, setDownVoteCatImageSaga);
}

export default function* rootSaga() {
  yield all([
    getUsersCatImagesSagaHandler(),
    uploadUsersCatImageSagaHandler(),
    getUsersFavoriteCatImagesSagaHandler(),
    setFavoriteCatImageSagaHandler(),
    setUnfavoriteCatImageSagaHandler(),
    getUsersCatImageVotesSagaHandler(),
    setUpVoteCatImageSagaHandler(),
    setDownVoteCatImageSagaHandler(),
  ]);
}
