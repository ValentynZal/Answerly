import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthorizedSelector, logout as logoutAction } from './ducks/user';

import Header from './assets/Components/Header';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Tags from './pages/Tags';
import Auth from './pages/Auth';
import Page404 from './pages/Page404';

function App({ pathname, isAuthorized, logout }) {
  return (
    <>
      { pathname !== '/'
        ? (
          <Header
            isAuthorized={isAuthorized}
            logout={logout}
          />
        )
        : null }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/tags" component={Tags} />
        <Route exact path={['/registration', '/login']} component={Auth} />
        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
}

App.propTypes = {
  pathname: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(state => ({
  pathname: state.router.location.pathname,
  isAuthorized: isAuthorizedSelector(state),
}), { logout: logoutAction })(App);
