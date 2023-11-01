import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <title>NotTube | A youtube clone</title>
            <meta
               name="description"
               content="Just a youtube clone"
               key="desc"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
