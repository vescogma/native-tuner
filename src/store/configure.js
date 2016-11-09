import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = {
    ...createStore(rootReducer, initialState, compose(
      applyMiddleware(..._getMiddleware(), sagaMiddleware),
    )),
    runSaga: sagaMiddleware.run,
  };
  return store;
}

function _getMiddleware() {
  return [];
}

export default configureStore;
