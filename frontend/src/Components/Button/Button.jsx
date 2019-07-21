import React from 'react';
import PropTypes from 'prop-types';
import { Button as BlueButton } from './styled/button';

function Button({to, children}) {
  return (
    <BlueButton to={to}>
      {children}
    </BlueButton>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Button;
