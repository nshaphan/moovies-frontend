import React from 'react';
import './App.scss';
import MainRoute from './routes/main.route';
import { Provider } from 'react-redux';
import store from './stores';

export default () => {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
};
