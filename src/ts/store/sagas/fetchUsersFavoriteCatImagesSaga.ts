import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { startedLoading, finishedLoading, saveUsersFavoriteCatImages } from '~/store/actions';

export default function* fetchUsersFavoriteCatImagesSaga() {
  try {
    yield put(startedLoading());

    const { data }: { data: IFavoriteCatImage[] } = yield call(
      Axios.get,
      '/api/favourites?limit=100',
    );

    yield put(saveUsersFavoriteCatImages(data));
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(finishedLoading());
  }
}
