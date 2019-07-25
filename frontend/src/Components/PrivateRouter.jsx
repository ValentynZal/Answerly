import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthedSelector } from '../ducks/user';

function PrivateRoute({ component: Component, isAuthed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthed) {
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
  isAuthed: PropTypes.bool.isRequired,
};

export default connect(state => ({ isAuthed: isAuthedSelector(state) }))(PrivateRoute);
