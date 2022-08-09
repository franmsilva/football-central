import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta name="Football Central" content="The Home of European Football" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
