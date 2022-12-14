import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bg1};
    font-family: 'Dosis', sans-serif;
    min-height: 100vh;
    width: 95%;
    max-width: 1024px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
