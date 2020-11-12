import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: object;
    colors: {
      lighter: string;
      light: string;
      grey: string;
      dark: string;
      white: string;
      main: string;
      darkWhite: string;
    }
  }
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";