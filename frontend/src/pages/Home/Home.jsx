import React from 'react';

import {
  HomeContainerS,
  HomeLogoS,
  HomeFormS,
  HomeInputS,
  HomeButtonsContainerS,
  HomeButtonS,
} from './styled/home';

export default function Home() {
  return (
    <HomeContainerS>
      <HomeFormS>
        <HomeLogoS to="/">
          Answerly
        </HomeLogoS>
        <HomeInputS />
        <HomeButtonsContainerS>
          <HomeButtonS to="/questions">
            Questions
          </HomeButtonS>
          <HomeButtonS to="/tags">
            Tags
          </HomeButtonS>
        </HomeButtonsContainerS>
      </HomeFormS>
    </HomeContainerS>
  );
}
