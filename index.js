/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';
import createSagaMiddleware  from 'redux-saga';
import { watchAgeUp } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer)
//sagaMiddleware.run(watchAgeUp);

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
