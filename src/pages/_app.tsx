import Head from 'next/head';

import type { AppProps } from 'next/app';

import '../index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Football Central</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
