import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import NavbarV2 from '../components/NavbarV2/NavbarV2'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Football Central</title>
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
