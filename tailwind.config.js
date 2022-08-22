/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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
    fontFamily: {
      header: 'Raleway',
      body: 'Roboto',
    },
  },
  plugins: [],
};
