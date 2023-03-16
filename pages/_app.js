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
        <meta name="twitter:site" content="SPex" />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="twitter:image:src" content="/favicon.svg" />
        <meta property="og:description" content="description" />
        <meta property="twitter:description" content="description" />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
