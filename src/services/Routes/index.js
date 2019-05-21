import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "@components/Common";
import { Home, Jobs, NotFound } from "@pages";

export const routes = [
  {
    component: Layout,
    routes: [{ path: "/vagas", component: Jobs }, { path: "/", exact: true, component: Home }]
  }
];

export const renderRoutes = routesList => {
  const list = routesList ? (
    <Switch>
      {routesList.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => <route.component {...props} route={route} />}
        />
      ))}
    </Switch>
  ) : null;
  return list;
};
