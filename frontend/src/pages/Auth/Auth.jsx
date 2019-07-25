import React from 'react';
import {
  AuthContainerS,
  AuthFormS,
  AuthLabelS,
} from './styled/auth';

export default function Auth({ location: { pathname } }) {
  if (pathname === '/login') {
    return (
      <AuthContainerS>
        <AuthFormS onSubmit={(e) => {
          e.preventDefault();
          console.log('login');
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
