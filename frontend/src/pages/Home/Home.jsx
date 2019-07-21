import React from 'react';

import {
  HomeContainerS,
  HomeLogoS,
  HomeFormS,
  HomeInputS,
  HomeButtonsContainerS,
  HomeButtonS,
} from './styled/home';
import Button from '../../Components/Button';

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
          <Button exact to="/registration">
            Registration
          </Button>
          <Button exact to="/login">
            Login
          </Button>
        </HomeButtonsContainerS>
      </HomeFormS>
    </HomeContainerS>
  );
}
