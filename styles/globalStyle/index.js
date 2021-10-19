import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

body {
  background-color: #121212;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;
  letter-spacing: 1px;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212);
  background-repeat: no-repeat;
}

a {
  text-decoration: none
}

`;

export const theme = {
  colors: {
    primary: '#1ed760',
    text: {
      white: '#fff',
    },
    background: {
      hero: 'rgb(41, 65, 171)',
    },
  },
};
