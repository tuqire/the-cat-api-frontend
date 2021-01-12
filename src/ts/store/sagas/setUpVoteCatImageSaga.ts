import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { startedLoading, finishedLoading, getUsersCatImages } from '~/store/actions';

export default function* setUpVoteCatImageSaga(action: ICatImageAction) {
  try {
    yield put(startedLoading());

    yield call(Axios.post, '/api/votes', {
      image_id: action.payload.catImage.id,
      value: 1,
    });

    yield put(getUsersCatImages());
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(finishedLoading());
  }
}
