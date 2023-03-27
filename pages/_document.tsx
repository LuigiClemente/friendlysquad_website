import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
// Import styled components ServerStyleSheet
// import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   // Step 1: Create an instance of ServerStyleSheet
  //   const sheet = new ServerStyleSheet();

  //   // Step 2: Retrieve styles from components in the page
  //   const page = renderPage(
  //     (App) => (props) => sheet.collectStyles(<App {...props} />)
  //   );

  //   // Step 3: Extract the styles as <style> tags
  //   const styleTags = sheet.getStyleElement();

  //   const initialProps = Document.getInitialProps(renderPage);

  //   // Step 4: Pass styleTags as a prop
  //   return {
  //     ...page,
  //     ...initialProps,
  //     styleTags,
  //     locale: renderPage?.locale || "en",
  //   };
  // }

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    return (
      <Html
        dir={this.props.locale === "ar" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head>
          <script src="https://unpkg.com/react-id-swiper@3.0.0/lib/react-id-swiper.js"></script>
          <script src="https://unpkg.com/react-id-swiper@3.0.0/lib/react-id-swiper.min.js"></script>

          {(this.props as any).styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
