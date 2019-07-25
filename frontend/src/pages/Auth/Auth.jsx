import React from 'react';
import { connect } from 'react-redux';
import {
  register,
  login,
} from '../../ducks/user';
import {
  AuthContainerS,
  AuthFormS,
  AuthLabelS,
} from './styled/auth';

function Auth({ location: { pathname }, register, login }) {
  if (pathname === '/login') {
    return (
      <AuthContainerS>
        <AuthFormS onSubmit={(e) => {
          e.preventDefault();
          console.log('login');
          login({});
        }}
        >
          <AuthLabelS htmlFor="username">
            <span>
              Username:
            </span>
            <input id="username" type="text" name="name" />
          </AuthLabelS>
          <AuthLabelS htmlFor="password">
            Password:
            <input id="password" type="text" name="name" />
          </AuthLabelS>
          <input type="submit" value="Submit" />
        </AuthFormS>
      </AuthContainerS>
    );
  }

  return (
    <AuthContainerS>
      <AuthFormS onSubmit={(e) => {
        e.preventDefault();
        console.log('registration');
        register({});
      }}
      >
        <AuthLabelS htmlFor="username">
          <span>
            Username:
          </span>
          <input id="username" type="text" name="name" />
        </AuthLabelS>
        <AuthLabelS htmlFor="email">
          Email:
          <input id="email" type="text" name="name" />
        </AuthLabelS>
        <AuthLabelS htmlFor="password">
          Password:
          <input id="password" type="text" name="name" />
        </AuthLabelS>
        <AuthLabelS htmlFor="duplicatedPassword">
          Repeat Password:
          <input id="duplicatedPassword" type="text" name="name" />
        </AuthLabelS>
        <input type="submit" value="Submit" />
      </AuthFormS>
    </AuthContainerS>
  );
}

export default connect(null, { register, login })(Auth);
