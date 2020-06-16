import App from "next/app"
import React, { Fragment } from "react"
import { GlobalStyle } from "../components/Common/App/ui"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return Object.keys(pageProps).length > 0 ? { pageProps } : {}
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <GlobalStyle />
        <Component {...pageProps} />
      </Fragment>
    )
  }
}

export default MyApp
