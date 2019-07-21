import React from 'react';
import { Button as BlueButton } from './styled/button';
import PropTypes from 'prop-types';

function Button({to, children}) {
  return (
    <BlueButton to={to}>
      {children}
    </BlueButton>
  )
}

Button.propTypes = {
  to: PropTypes.string,
};

export default Button;

