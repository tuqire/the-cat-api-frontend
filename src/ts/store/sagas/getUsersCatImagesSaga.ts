import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { startedLoading, finishedLoading, saveUsersCatImages, getUsersFavoriteCatImages } from '~/store/actions';

export default function* getUsersCatImagesSaga() {
  try {
    yield put(startedLoading());

    yield put(getUsersFavoriteCatImages());

    // TODO: add pagination
    const { data }: { data: ICatImage[] } = yield call(
      Axios.get,
      '/api/images?limit=100&include_vote=1&include_favourite=1',
    );

    yield put(saveUsersCatImages(data));
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(finishedLoading());
  }
}
