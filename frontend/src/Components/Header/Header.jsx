import React from 'react';

import {
  HeaderS,
  HeaderInnerS,
  HeaderLogoS,
  HeaderNavS,
  HeaderNavItemS,
} from './styled/header';

import ButtonS from '../../StyledComponents/button';

function Header() {
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
          <ButtonS exact to="/registration">
            Registration
          </ButtonS>
          <ButtonS exact to="/login">
            Login
          </ButtonS>
        </HeaderNavS>
      </HeaderInnerS>
    </HeaderS>
  );
}

export default Header;
