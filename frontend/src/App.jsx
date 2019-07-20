import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';

import createRoutes from './routes';

const routes = createRoutes();

function App() {
  return (
    <Router>
      <Header />
      { routes }
    </Router>
  );
}

export default App;
