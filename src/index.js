/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './boot/store/configureStore';
import Root from './boot/components/Root';

import { checkIsLogin } from './auth/actions/authActions';


require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

store.dispatch(checkIsLogin());

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./boot/components/Root', () => {
    const NewRoot = require('./boot/components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
