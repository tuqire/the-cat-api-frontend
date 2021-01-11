import { put } from 'redux-saga/effects';
import { startedLoading, finishedLoading } from '~/store/actions';

export default function* mockSideEffectHandlerSaga() {
  try {
    yield put(startedLoading());

    console.log('mock side effect handler');

    yield put(finishedLoading());
  } catch (error) {
    console.error({ error });
  }
}
