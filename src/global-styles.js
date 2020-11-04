import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(/assets/images/bg/bg-image-1.jpg);
  color: #FFFFFF;
  font-size: 16px;
  z-index: -1;
  p {
    color: #c6c9d8;
    font-size: 14px;
    opacity: 0.75;
  }
  `;
