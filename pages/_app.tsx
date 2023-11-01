import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>NotTube | A youtube clone</title>
            <meta
               name="description"
               content="Just a youtube clone"
               key="desc"
            />
         </Head>
         <Component {...pageProps} />
      </>
   );
}
