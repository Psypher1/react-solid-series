import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* favicons */}
        <link href="/favicon.ico" rel="shortcut icon" />
    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
