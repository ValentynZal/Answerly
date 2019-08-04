import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  HomeContainerS,
  HomeLogoS,
  HomeFormS,
  HomeInputS,
  HomeButtonsContainerS,
  HomeButtonS,
} from './styled/home';
import ButtonS from '../../assets/StyledComponents/button';

import { isAuthorizedSelector } from '../../ducks/user';

function Home({ isAuthorized }) {
  const buttons = () => {
    if (isAuthorized) return null;
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
          {buttons()}
        </HomeButtonsContainerS>
      </HomeFormS>
    </HomeContainerS>
  );
}

Home.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default connect(state => ({
  isAuthorized: isAuthorizedSelector(state),
}))(Home);
