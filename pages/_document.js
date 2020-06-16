import { Fragment } from "react"
import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

const GA_ID = ""

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const isProduction = process.env.NODE_ENV === "production"

    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `,
    }
  }

  render() {
    const { isProduction } = this.props

    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
          />
          <link rel="canonical" href="https://minasdev.org/" />

          {/* PWA Configs */}
          <meta name="mobile-web-app-capable" content="no" />
          <meta name="apple-mobile-web-app-capable" content="no" />
          <meta name="application-name" content="Minas Dev" />
          <meta name="apple-mobile-web-app-title" content="Minas Dev" />
          <meta name="theme-color" content="#e64c3b" />
          <meta name="msapplication-navbutton-color" content="#e64c3b" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <link
            rel="shortcut icon"
            href="/images/favicons/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/images/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/images/favicons/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/favicons/apple-touch-icon-152x152.png"
          />

          {/* Schema.org */}
          <meta
            itemProp="image"
            content="https://minasdev.org/images/facebook-thumb.png"
          />

          {/* Facebook Tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://minasdev.org/images/facebook-thumb.png"
          />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@minasdev" />
          <meta name="twitter:creator" content="@obetomuniz" />
          <meta
            name="twitter:image"
            content="https://minasdev.org/images/facebook-thumb.png"
          />

          {/* Google Tags */}
          <meta name="google" value="notranslate" />

          {/* Styles */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=block"
            rel="stylesheet"
          />

          {/* Google Analytics */}
          {isProduction && GA_ID && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
