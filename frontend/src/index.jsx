import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux';

import GlobalStyles from './globalStyles';

import App from './App';

const root = (
  <Provider store={store}>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
