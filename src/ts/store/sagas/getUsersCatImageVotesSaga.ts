import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  startedLoading,
  finishedLoading,
  saveUsersCatImageVotes,
} from '~/store/actions';

export default function* getUsersCatImageVotesSaga() {
  try {
    yield put(startedLoading());

    // TODO: add pagination
    const { data }: { data: ICatImageVote[] } = yield call(
      Axios.get,
      '/api/votes?limit=10000',
    );

    yield put(saveUsersCatImageVotes(data));
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(finishedLoading());
  }
}
