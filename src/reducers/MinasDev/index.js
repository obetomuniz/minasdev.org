import { fromJS } from "immutable";
import { createActions } from "@reducers";
import {
  FETCH_MINASDEV_EVENTS_REQUEST,
  FETCH_MINASDEV_EVENTS_SUCCESS,
  FETCH_MINASDEV_EVENTS_FAILURE
} from "@reducers/MinasDev/types";

export const initialState = fromJS({
  isLoading: false,
  error: null,
  events: []
});

export default (state = initialState, action) => {
  return createActions(
    { state, action },
    {
      [FETCH_MINASDEV_EVENTS_REQUEST]: () => state.merge({ isLoading: true }),
      [FETCH_MINASDEV_EVENTS_SUCCESS]: () =>
        state.merge({ isLoading: false, events: action.payload.events }),
      [FETCH_MINASDEV_EVENTS_FAILURE]: () =>
        state.merge({
          isLoading: false,
          error: action.payload.error,
          events: action.payload.events
        })
    }
  );
};
