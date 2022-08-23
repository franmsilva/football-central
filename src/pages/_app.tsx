import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@styles/globals';
import { Theme } from '@styles/theme';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
