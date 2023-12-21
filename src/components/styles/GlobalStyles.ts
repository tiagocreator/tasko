import { createGlobalStyle } from 'styled-components';

import { MyTheme } from '../../themes';

export const GlobalStyles = createGlobalStyle<{ theme: MyTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100vh;
  }

  body, #root {
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bg1};
    font-family: 'Dosis', sans-serif;
    min-height: 100vh;
    width: 95%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
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
