import Head from 'next/head'
import '../styles/globals.css'
import { useEffect, useState } from "react";
import { BASE_PREFIX } from "../lib/util/util";

const icon = `${BASE_PREFIX}/favicon.ico`
const description = "Aarush Narang's Portfolio"
const title = "Portfolio | Aarush Narang"

function MyApp({ Component, pageProps }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return <>
    <Head>
      {/* end gtag */}
      <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={icon} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#000000" />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={icon} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={icon} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@aarush" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
