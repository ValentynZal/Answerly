import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import {
  register as registerAction,
  login as loginAction,
  errorSelector,
} from '../../ducks/user';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';

const AuthForms = ({ location: { pathname }, register, login, error }) => {
  const submitHandler = (formFields) => {
    if (pathname === '/registration') {
      register(formFields);
    } else {
      login(formFields);
    }
  };

  const registrationValidator = (values) => {
    const errors = {};
    Object.keys(error).forEach((key) => {
      [errors[key]] = error[key];
    });
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (!values.rPassword) {
      errors.rPassword = 'Required';
    } else if (values.rPassword !== values.password) {
      errors.rPassword = 'Must match';
    }
    return errors;
  };

  const loginValidator = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <Form
        onSubmit={submitHandler}
        validate={pathname === '/registration' ? registrationValidator : loginValidator}
        render={pathname === '/registration' ? RegistrationForm : LoginForm}
      />
    </div>
  );
};

AuthForms.propTypes = {
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  state => ({ error: errorSelector(state) }),
  { register: registerAction, login: loginAction },
)(AuthForms);
