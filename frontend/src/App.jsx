import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Components/Header';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Tags from './pages/Tags';
import Auth from './pages/Auth';

function App({ pathname }) {
  return (
    <>
      { pathname !== '/' ? <Header /> : null }
      <Route exact path="/" component={Home} />
      <Route exact path="/questions" component={Questions} />
      <Route exact path="/tags" component={Tags} />
      <Route exact path={['/registration', '/login']} component={Auth} />
    </>
  );
}

App.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default connect(state => ({ pathname: state.router.location.pathname }))(App);
