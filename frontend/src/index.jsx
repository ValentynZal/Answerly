import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './globalStyles';

import App from './App';

const root = (
  <Router>
    <GlobalStyles />
    <App />
  </Router>
);

ReactDOM.render(root, document.getElementById('root'));
