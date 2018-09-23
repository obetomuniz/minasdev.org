import { combineReducers } from "redux-immutable";
import routerReducer from "@reducers/Router";
import minasdevReducer from "@reducers/MinasDev";

export const createActions = ({ state, action }, actions) => {
  const cases = actions[action.type];
  return cases ? cases() : state;
};

const rootReducer = combineReducers({
  routing: routerReducer,
  minasdev: minasdevReducer
});

export default rootReducer;
