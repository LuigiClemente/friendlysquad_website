import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
      

          {/* <link rel="stylesheet" href="https://unpkg.com/swiper@9.1.1/swiper-bundle.min.css" /> */}
           {/* <link rel="stylesheet" href="https://unpkg.com/swiper@5.4.5/css/swiper.css" />
          <link rel="stylesheet" href="https://unpkg.com/swiper@5.4.5/css/swiper.min.css" /> */}



          <script src="https://unpkg.com/react-id-swiper@3.0.0/lib/react-id-swiper.js"></script>
          <script src="swiper-element-bundle.min.js"></script>
          <script src="https://unpkg.com/react-id-swiper@3.0.0/lib/react-id-swiper.min.js"></script> 
       
          {(this.props as any).styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
