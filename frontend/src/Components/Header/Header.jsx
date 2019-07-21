import React from 'react';

import {
  HeaderS,
  HeaderInnerS,
  HeaderLogoS,
  HeaderNavS,
  HeaderNavItemS,
} from './styled/header';

import Button from '../Button';

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
          <Button exact to="/registration">
            Registration
          </Button>
          <Button exact to="/login">
            Login
          </Button>
        </HeaderNavS>
      </HeaderInnerS>
    </HeaderS>
  );
}

export default Header;
