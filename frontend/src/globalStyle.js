/* eslint-disable global-require */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${require('./fonts/Roboto-Regular.ttf')}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Roboto';
  }
`;

export default GlobalStyle;
