import React from 'react';

import {
  HeaderS,
  HeaderInnerS,
  HeaderLogoS,
  HeaderNavS,
  HeaderNavItemS,
} from './styled/header';

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
        </HeaderNavS>
      </HeaderInnerS>
    </HeaderS>
  )
}

export default Header;
