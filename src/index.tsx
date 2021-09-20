import 'core-js/es/string';
import 'core-js/es/array';
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/object';
import 'core-js/es/promise';

import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './app';
import configureStore from './store/store';

const store = configureStore();
const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://apiv1.luxrobo.com/gateway/graphql'
      : 'https://dev-apiv1.luxrobo.com/gateway/graphql',
  cache: new InMemoryCache()
});

const appElement = document.getElementById('app');

ReactDOM.render(
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ReduxProvider>,
  appElement
);
