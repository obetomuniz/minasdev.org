/* global webpackIsomorphicTools */
import path from "path";
import express from "express";
import webpack from "webpack";
import webpackConfig from "./webpack.config";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Html from "@components/Common/Html";

const app = express();
const compiler = webpack(webpackConfig());

const serverOptions = {
  contentBase: `http://localhost:3000`,
  quiet: true,
  noInfo: true,
  hot: false,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  compress: false,
  publicPath: `http://localhost:3000`,
  headers: { "Access-Control-Allow-Origin": "*" },
  stats: { colors: true }
};

app.use(express.static(path.join(__dirname, "../", "../", "dist")));
app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));
app.use("*", (req, res) => {
  res.set("content-type", "text/html");
  res.send(
    `<!doctype html>${renderToStaticMarkup(<Html assets={webpackIsomorphicTools.assets()} />)}`
  );
  res.end();
});
app.listen(3000, err => {
  if (err) console.error(`Error: ${err}`);

  console.info(
    `Server Bootstrap Successful! Open http://localhost:3000 to see the Development Environment`
  );
});
