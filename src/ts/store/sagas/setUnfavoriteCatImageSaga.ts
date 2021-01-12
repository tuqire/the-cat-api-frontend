import { call, put, select } from 'redux-saga/effects';
import Axios from 'axios';
import { startedLoading, finishedLoading, getUsersCatImages } from '~/store/actions';
import { selectUsersFavoriteCatImage } from '~/store/reducers/user/catImages';

export default function* setUnfavoriteCatImageSaga(action: ICatImageAction) {
  try {
    yield put(startedLoading());

    const favoriteCatImage: IFavoriteCatImage | undefined = yield select(selectUsersFavoriteCatImage, action.payload.catImage.id);

    if (favoriteCatImage) {
      yield call(Axios.delete, `/api/favourites/${favoriteCatImage.id}`);

      yield put(getUsersCatImages());
    }
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(finishedLoading());
  }
}