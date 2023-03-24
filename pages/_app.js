import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SPex</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="SPex" />
        <meta property="twitter:title" content="SPex" />
        <meta property="og:site_name" content="SPex" />
        <meta name="twitter:site" content="https://www.spex.website/" />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="twitter:image:src" content="/favicon.svg" />
        <meta
          property="og:description"
          content="SPex is an exchange for storage providers on FVM to allow SPs to trade their account belongings such as ID, beneficiary, etc. for financing, shorting; incorporating with other FVM products to offer a one-stop-shop financial services "
        />
        <meta
          property="twitter:description"
          content="SPex is an exchange for storage providers on FVM to allow SPs to trade their account belongings such as ID, beneficiary, etc. for financing, shorting; incorporating with other FVM products to offer a one-stop-shop financial services "
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
