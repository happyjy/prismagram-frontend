import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import App from './Components/App';
import Client from './Apollo/Client';

ReactDOM.render(
  <ApolloHooksProvider client={Client}>
    <App />
  </ApolloHooksProvider>,
  document.getElementById('root'),
);
