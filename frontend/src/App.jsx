import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthorizedSelector, logout as logoutAction } from './ducks/user';

import Header from './assets/Components/Header';

const Home = lazy(() => import('./pages/Home'));

const Questions = lazy(() => import('./pages/Questions'));

const Tags = lazy(() => import('./pages/Tags'));

const Auth = lazy(() => import('./pages/Auth'));

const Page404 = lazy(() => import('./pages/Page404'));

const LoadingMessage = () => 'Loading...';

function App({ pathname, isAuthorized, logout }) {
  return (
    <Suspense fallback={<LoadingMessage />} delayMs={1000}>
      {pathname !== '/' ? <Header isAuthorized={isAuthorized} logout={logout} /> : null}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path={['/registration', '/login']}>
          <Auth />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Suspense>
  );
}

App.propTypes = {
  pathname: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    pathname: state.router.location.pathname,
    isAuthorized: isAuthorizedSelector(state),
  }),
  { logout: logoutAction },
)(App);
