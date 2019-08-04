import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux';
import history from './history';
import GlobalStyle from './globalStyle';

import App from './App';

const root = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
