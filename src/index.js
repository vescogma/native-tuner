import React from 'react'
import { Component } from 'react-native';
import { Provider } from 'react-redux';

import routes from './store/routes';
import configureStore from './store/configure';
import rootSaga from './sagas';

const store = configureStore({});
store.runSaga(rootSaga);

const Main = () => {
  return (
    <Provider store={store}>
      { routes }
    </Provider>
  )
}

export default Main;
