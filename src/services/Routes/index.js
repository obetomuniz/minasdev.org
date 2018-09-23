import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import { Layout } from "@components/Common";
import { Home, Jobs, NotFound } from "@pages";

export const routes = [
  {
    component: Layout,
    routes: [
      { path: "/vagas", component: Jobs },
      { path: "/", exact: true, component: Home },
      { component: NotFound }
    ]
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
