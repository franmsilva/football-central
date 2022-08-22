import Head from 'next/head';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Two Football</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
