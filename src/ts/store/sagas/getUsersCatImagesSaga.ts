import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { startedLoading, finishedLoading, saveUsersCatImages } from '~/store/actions';

export default function* getUsersCatImagesSaga() {
  try {
    yield put(startedLoading());

    // TODO: add pagination
    const { data }: { data: ICatImage[] } = yield call(Axios.get, '/api/images?limit=100');

    yield put(saveUsersCatImages(data));
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(finishedLoading());
  }
}
