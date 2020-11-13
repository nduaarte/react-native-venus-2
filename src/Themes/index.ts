import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    lighter: string;
    light: string;
    grey: string;
    dark: string;
    white: string;
    main: string;
    darkWhite: string;
  }
}

export const nebula: DefaultTheme = {
  lighter: '#3F3F3F',
  light: '#333333',
  grey: '#1f2121',
  dark: '#1A1A1A',
  white: '#F5F5F5',
  main: '#893595',
  darkWhite: '#8a8a8a'
}

export const ruby: DefaultTheme = {
  lighter: '#3F3F3F',
  light: '#333333',
  grey: '#1f2121',
  dark: '#1A1A1A',
  main: '#8a2548',
  white: '#F5F5F5',
  darkWhite: '#8a8a8a'
}

export const venus: DefaultTheme = {
  lighter: '#3F3F3F',
  light: '#333333',
  grey: '#1f2121',
  dark: '#1A1A1A',
  main: '#E9BA78',
  white: '#F5F5F5',
  darkWhite: '#8a8a8a'
}
