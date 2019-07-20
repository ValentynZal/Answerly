import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store from './redux';
import history from './history';
import GlobalStyles from './globalStyles';

import App from './App';

const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyles />
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
