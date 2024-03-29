import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  fontFamily: {
    header: "'Raleway', 'Open Sans', sans-serif",
    body: "'Roboto', 'Open Sans', sans-serif",
  },
  colors: {
    black: '#000000',
    white: '#ffffff',
    'gray-dark': '#6b6b6b',
    gray: '#b8b8b8',
    'gray-light': '#f0f0f0',
    'gray-lightest': '#f3f4f5',
    purple: '#9e9eff',
    yellow: '#e1ff57',
  },
  fontWeight: {
    bold: 700,
    semibold: 500,
    regular: 400,
    light: 300,
    thin: 100,
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
};
