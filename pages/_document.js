import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import React, { Component } from "react";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notification"></div>
        </body>
      </Html>
    );
  }
}
