import React from 'react';

import {
  HomeContainerS,
  HomeLogoS,
  HomeFormS,
  HomeInputS,
  HomeButtonsContainerS,
  HomeButtonS,
} from './styled/home';
import ButtonS from '../../StyledComponents/button';

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
          <ButtonS exact to="/registration">
            Registration
          </ButtonS>
          <ButtonS exact to="/login">
            Login
          </ButtonS>
        </HomeButtonsContainerS>
      </HomeFormS>
    </HomeContainerS>
  );
}
