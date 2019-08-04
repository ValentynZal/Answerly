import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthorizedSelector } from '../../ducks/user';

function PrivateRoute({ component: Component, isAuthorized, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthorized) {
          return (<Component {...props} />);
        }
        // eslint-disable-next-line react/prop-types
        return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
      }
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default connect(state => ({ isAuthorized: isAuthorizedSelector(state) }))(PrivateRoute);
