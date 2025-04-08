// src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ec1848" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
