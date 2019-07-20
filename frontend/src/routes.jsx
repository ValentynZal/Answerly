import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './Home';
import Answer from './Answer';

const createRoutes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/answer" component={Answer} />
  </>
);

export default createRoutes;
