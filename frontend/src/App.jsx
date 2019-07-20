import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Components/Header';
import Home from './Home';
import Questions from './Questions';
import Tags from './Tags';

function App({ location: { pathname } }) {
  return (
    <>
      { pathname !== '/' ? <Header /> : null }
      <Route exact path="/" component={Home} />
      <Route exact path="/questions" component={Questions} />
      <Route exact path="/tags" component={Tags} />
    </>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
export default withRouter(App);
