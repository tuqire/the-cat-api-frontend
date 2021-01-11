import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import 'regenerator-runtime/runtime';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSageMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
