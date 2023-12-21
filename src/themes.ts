import { DefaultTheme } from 'styled-components';

export interface MyTheme extends DefaultTheme {
  black: string;
  white: string;
  text: string;

  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;

  primaryLight: string;
  primaryMain: string;
  primaryDark: string;

  secondaryLight: string;
  secondaryMain: string;
  secondaryDark: string;

  errorLight: string;
  errorMain: string;
  errorDark: string;

  warningLight: string;
  warningMain: string;
  warningDark: string;

  infoLight: string;
  infoMain: string;
  infoDark: string;

  successLight: string;
  successMain: string;
  successDark: string;
}

export const theme: MyTheme = {
  // General colors
  black: '#000',
  white: '#fff',
  text: '#202023',

  // Background colors
  bg1: '#f8f8f8',
  bg2: '#ecedf6',
  bg3: '#cccdde',
  bg4: '#dedfe1',

  // Primary colors
  primaryLight: '#838bf3',
  primaryMain: '#646ff0',
  primaryDark: '#464da8',

  // Secondary colors
  secondaryLight: '#ff8c7d',
  secondaryMain: '#ff705d',
  secondaryDark: '#ba4949',

  // Error colors
  errorLight: '#ef5350',
  errorMain: '#d32f2f',
  errorDark: '#c62828',

  // Warning colors
  warningLight: '#ff9800',
  warningMain: '#ed6c02',
  warningDark: '#e65100',

  // Info colors
  infoLight: '#03a9f4',
  infoMain: '#0288d1',
  infoDark: '#01579b',

  // Success colors
  successLight: '#4caf50',
  successMain: '#2e7d32',
  successDark: '#1b5e20',
};
