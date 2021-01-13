import { all, takeEvery } from 'redux-saga/effects';
import * as ACTIONS from '~/store/actions';
import fetchUsersCatImagesSaga from './fetchUsersCatImagesSaga';
import submitUsersCatImageSaga from './submitUsersCatImageSaga';
import fetchUsersFavoriteCatImagesSaga from './fetchUsersFavoriteCatImagesSaga';
import submitFavoriteCatImageSaga from './submitFavoriteCatImageSaga';
import submitUnfavoriteCatImageSaga from './submitUnfavoriteCatImageSaga';
import fetchUsersCatImageVotesSaga from './fetchUsersCatImageVotesSaga';
import submitUpVoteCatImageSaga from './submitUpVoteCatImageSaga';
import submitDownVoteCatImageSaga from './submitDownVoteCatImageSaga';

function* fetchUsersCatImagesSagaHandler() {
  yield takeEvery(ACTIONS.FETCH_USERS_CAT_IMAGES, fetchUsersCatImagesSaga);
}

function* submitUsersCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SUBMIT_USERS_CAT_IMAGE, submitUsersCatImageSaga);
}

function* fetchUsersFavoriteCatImagesSagaHandler() {
  yield takeEvery(ACTIONS.FETCH_USERS_FAVORITE_CAT_IMAGES, fetchUsersFavoriteCatImagesSaga);
}

function* submitFavoriteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SUBMIT_FAVORITE_CAT_IMAGE, submitFavoriteCatImageSaga);
}

function* submitUnfavoriteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SUBMIT_UNFAVORITE_CAT_IMAGE, submitUnfavoriteCatImageSaga);
}

function* fetchUsersCatImageVotesSagaHandler() {
  yield takeEvery(ACTIONS.FETCH_USERS_CAT_IMAGE_VOTES, fetchUsersCatImageVotesSaga);
}

function* submitUpVoteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SUBMIT_UP_VOTE_CAT_IMAGE, submitUpVoteCatImageSaga);
}

function* submitDownVoteCatImageSagaHandler() {
  yield takeEvery(ACTIONS.SUBMIT_DOWN_VOTE_CAT_IMAGE, submitDownVoteCatImageSaga);
}

export default function* rootSaga() {
  yield all([
    fetchUsersCatImagesSagaHandler(),
    submitUsersCatImageSagaHandler(),
    fetchUsersFavoriteCatImagesSagaHandler(),
    submitFavoriteCatImageSagaHandler(),
    submitUnfavoriteCatImageSagaHandler(),
    fetchUsersCatImageVotesSagaHandler(),
    submitUpVoteCatImageSagaHandler(),
    submitDownVoteCatImageSagaHandler(),
  ]);
}
