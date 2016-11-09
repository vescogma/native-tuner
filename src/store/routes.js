import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from '../containers/App';

export default (
  <Router>
    <Scene key="root">
      <Scene key="home" component={ App } />
    </Scene>
  </Router>
);
