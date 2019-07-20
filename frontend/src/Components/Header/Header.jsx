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
          <HeaderNavItemS exact to="/">
            Home
          </HeaderNavItemS>
          <HeaderNavItemS exact to="/answer">
            Answer
          </HeaderNavItemS>
        </HeaderNavS>
      </HeaderInnerS>
    </HeaderS>
  )
}

export default Header;
