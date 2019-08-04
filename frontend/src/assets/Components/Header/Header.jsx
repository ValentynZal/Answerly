import React from 'react';

import {
  HeaderS,
  HeaderInnerS,
  HeaderLogoS,
  HeaderNavS,
  HeaderNavItemS,
} from './styled/header';

import ButtonS from '../../StyledComponents/button';

function Header({ isAuthorized, logout }) {
  const authButtons = () => {
    if (isAuthorized) {
      return (
        <button type="button" onClick={logout}>
          Logout
        </button>
      );
    }
    return (
      <React.Fragment>
        <ButtonS to="/registration">
          Registration
        </ButtonS>
        <ButtonS to="/login">
          Login
        </ButtonS>
      </React.Fragment>
    );
  };

  return (
    <HeaderS>
      <HeaderInnerS>
        <HeaderLogoS to="/">
          Answerly
        </HeaderLogoS>
        <HeaderNavS>
          <HeaderNavItemS exact to="/questions">
            Questions
          </HeaderNavItemS>
          <HeaderNavItemS exact to="/tags">
            Tags
          </HeaderNavItemS>
          {authButtons()}
        </HeaderNavS>
      </HeaderInnerS>
    </HeaderS>
  );
}

export default Header;
