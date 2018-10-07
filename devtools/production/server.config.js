/* global webpackIsomorphicTools */
import http from "http";
import path from "path";
import express from "express";
import compression from "compression";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { Provider } from "react-redux";
import StaticRouter from "react-router-dom/StaticRouter";
import rootSagas from "@sagas";
import Html from "@components/Common/Html";
import { routes, renderRoutes } from "@services/Routes";
import configureStore from "@services/Store";

const app = express();
const server = new http.Server(app);
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
  const context = {};
  const component = (
    <Provider store={store}>
      <StaticRouter location={route} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  store
    .runSaga(rootSagas)
    .done.then(() => {
      if (context.url) {
        res.redirect(302, context.url);
        return;
      }

      res.set("content-type", "text/html");
      res.send(
        `<!doctype html>${renderToStaticMarkup(
          <Html component={component} assets={webpackIsomorphicTools.assets()} store={store} />
        )}`
      );
      res.end();
    })
    .catch(e => console.log(e));

  renderToString(component);

  store.close();
};

app.use(compression());
app.use(
  express.static(path.join(__dirname, "../", "../", "dist"), {
    maxAge: 1 * 365 * 24 * 60 * 60 * 1000
  })
);

app.get("/vagas", (req, res) => {
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

app.get("/", (req, res) => {
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

server.listen(4000, err => {
  if (err) {
    console.error(`ERROR: ${err}`);
  }

  if (process.env.NODE_ENV === "production") {
    console.info(
      `Server Bootstrap Successful! Open http://localhost:4000 to see the Production Environment`
    );
  }
});
