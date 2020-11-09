import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Auth as auth } from 'aws-amplify';

import reduxThunk from 'redux-thunk';
import Amplify from 'aws-amplify';
import config from './config.json';
import reducers from './reducers';

import './index.scss';
import App from './app';
import { GlobalStyles } from './global-styles';
import { AwsContext } from './context/aws';

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk)
);

render(
  <Provider store={store}>
    <AwsContext.Provider value={auth}>
      <GlobalStyles />
      <App />
    </AwsContext.Provider>
  </Provider>,
  document.getElementById('root')
);
