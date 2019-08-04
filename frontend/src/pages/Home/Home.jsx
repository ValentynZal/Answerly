import React from 'react';

import {
  HomeContainerS,
  HomeLogoS,
  HomeFormS,
  HomeInputS,
  HomeButtonsContainerS,
  HomeButtonS,
} from './styled/home';
import ButtonS from '../../assets/StyledComponents/button';

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
          <ButtonS to="/registration">
            Registration
          </ButtonS>
          <ButtonS to="/login">
            Login
          </ButtonS>
        </HomeButtonsContainerS>
      </HomeFormS>
    </HomeContainerS>
  );
}
