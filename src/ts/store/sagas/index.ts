import { all, takeEvery } from 'redux-saga/effects';
import * as ACTIONS from '~/store/actions';
import mockSideEffectHandler from './mockSideEffectHandler';

function* mockSideEffectHandlerSaga() {
  yield takeEvery(ACTIONS.MOCK_SIDE_EFFECT, mockSideEffectHandler);
}

export default function* rootSaga() {
  yield all([
    mockSideEffectHandlerSaga(),
  ]);
}
