/* global webpackIsomorphicTools */
import http from "http";
import path from "path";
import express from "express";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { Provider } from "react-redux";
import StaticRouter from "react-router-dom/StaticRouter";
import rootSagas from "@sagas";
import Html from "@components/Common/Html";
import { routes, renderRoutes } from "@services/Routes";
import configureStore from "@services/Store";

const app = express();

app.use(express.static(path.join(__dirname, "../", "../", "dist")));
const server = new http.Server(app);

app.use((req, res) => {
  const store = configureStore({});
  const context = {};
  const component = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
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
