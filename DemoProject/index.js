/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './Component/redux/store';

// create new component and wrap the App component
const AppRedux =()=> (
  <Provider store={store}>
    <App/>
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppRedux);
