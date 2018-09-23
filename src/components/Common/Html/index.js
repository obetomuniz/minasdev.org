import React from "react";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import CircularJSON from "circular-json";
import { ServerStyleSheet } from "styled-components";

const Html = ({ assets, component, store }) => {
  const head = Helmet.rewind();
  const sheet = new ServerStyleSheet();
  const body = component ? renderToString(component) : "";
  sheet.collectStyles(body);
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />

        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.title.toComponent()}

        {/* Canonical URL */}
        <link rel="canonical" href="https://minasdev.org/" />

        {/* PWA Config */}
        <link rel="manifest" href="manifest.json" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="application-name" content="Minas Dev" />
        <meta name="apple-mobile-web-app-title" content="Minas Dev" />
        <meta name="theme-color" content="#e64c3b" />
        <meta name="msapplication-navbutton-color" content="#e64c3b" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <link
          rel="shortcut icon"
          href="https://minasdev.org/images/favicons/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="https://minasdev.org/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://minasdev.org/images/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://minasdev.org/images/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://minasdev.org/images/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://minasdev.org/images/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://minasdev.org/images/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://minasdev.org/images/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://minasdev.org/images/favicons/apple-touch-icon-152x152.png"
        />

        {/* Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://minasdev.org/images/facebook-thumb.png" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@minasdev" />
        <meta name="twitter:creator" content="@obetomuniz" />

        <meta name="twitter:image" content="https://minasdev.org/images/facebook-thumb.png" />

        {/* Schema.org */}
        <meta itemProp="image" content="https://minasdev.org/images/facebook-thumb.png" />

        {/* Google Tags */}
        <meta name="google" value="notranslate" />

        {assets.styles && <link rel="stylesheet" href={assets.styles.main} />}

        {sheet.getStyleElement()}
      </head>
      <body>
        <noscript>
          Seu navegador não suporta scripts. Experimente usar outro navegador, ou atualizar para um
          mais moderno.
        </noscript>
        <div id="container" dangerouslySetInnerHTML={{ __html: body }} />
        {store && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__=${CircularJSON.stringify(store.getState())};`
            }}
            charSet="UTF-8"
          />
        )}
        {assets.javascript && <script src={assets.javascript.vendor} charSet="UTF-8" />}
        {assets.javascript && <script src={assets.javascript.main} charSet="UTF-8" />}
      </body>
    </html>
  );
};

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
};

export default Html;
