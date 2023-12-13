import { DefaultTheme } from 'styled-components';

export interface MyTheme extends DefaultTheme {
  black: string;
  white: string;
  themeRed: string;
  themeBlue: string;
  themeGreen: string;
  themeOrange: string;
  secondaryBtn: string;
  text: string;
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
}

export const theme: MyTheme = {
  black: '#000',
  white: '#fff',
  themeRed: '#ff705d',
  themeBlue: '#646ff0',
  themeGreen: '#008000',
  themeOrange: '#F58E08',
  secondaryBtn: '#606468',
  text: '#202023',
  bg1: '#f8f8f8',
  bg2: '#ecedf6',
  bg3: '#cccdde',
  bg4: '#dedfe1',
};
