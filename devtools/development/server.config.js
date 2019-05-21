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
import configureStore from "@services/Store";

const app = express();
const compiler = webpack(webpackConfig());
const serverOptions = {
  contentBase: `http://localhost:3000`,
  quiet: true,
  noInfo: true,
  hot: true,
  publicPath: `http://localhost:3000`,
  headers: { "Access-Control-Allow-Origin": "*" },
  stats: { colors: true }
};
const clearRequireCache = () => {
  Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key];
  });
};
const setRenderContext = (data, route, { res }) => {
  const store = configureStore({
    minasdev: {
      ...data.reduce((d, { key, data }) => {
        d[key] = data;
        return d;
      }, {})
    }
  });

  res.set("content-type", "text/html");
  res.send(
    `<!doctype html>${renderToStaticMarkup(
      <Html store={store} context={{}} assets={webpackIsomorphicTools.assets()} />
    )}`
  );
  res.end();
};

app.use(express.static(path.join(__dirname, "../", "../", "dist")));
app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.use("/vagas", (req, res) => {
  clearRequireCache();

  let data;

  try {
    data = [
      {
        key: "jobs",
        data: require("../../../api.minasdev.org/data/jobs.json")
      },
      {
        key: "jobsFiltered",
        data: require("../../../api.minasdev.org/data/jobs.json")
      }
    ];
  } catch (error) {
    data = [
      {
        key: "jobs",
        data: require("@data/jobs.json")
      },
      {
        key: "jobsFiltered",
        data: require("@data/jobs.json")
      }
    ];
  }

  setRenderContext(data, "/vagas", { res });
});

app.use("/", (req, res) => {
  clearRequireCache();

  let data;

  try {
    data = [
      {
        key: "events",
        data: require("../../../api.minasdev.org/data/events.json")
      }
    ];
  } catch (error) {
    data = [
      {
        key: "events",
        data: require("@data/events.json")
      }
    ];
  }

  setRenderContext(data, "/", { res });
});

app.listen(3000, err => {
  if (err) console.error(`Error: ${err}`);

  console.info(
    `Server Bootstrap Successful! Open http://localhost:3000 to see the Development Environment`
  );
});
