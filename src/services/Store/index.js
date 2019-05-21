import { fromJS } from "immutable";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import Reducers from "@reducers";

function enableHMR(store) {
  if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("../../reducers", () => {
      const nextReducer = require("../../reducers").default;
      store.replaceReducer(nextReducer);
    });
  }
}

export default function configureStore(initialState, history) {
  const store = createStore(
    Reducers,
    fromJS(initialState),
    compose(
      applyMiddleware(routerMiddleware(history)),
      process.env.NODE_ENV === "development" &&
        typeof window === "object" &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  enableHMR(store);
  return store;
}
