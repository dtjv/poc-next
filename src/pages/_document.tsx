import { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
