import { fromJS } from "immutable";
import { createActions } from "@reducers";
import {
  FETCH_MINASDEV_EVENTS_REQUEST,
  FETCH_MINASDEV_EVENTS_SUCCESS,
  FETCH_MINASDEV_EVENTS_FAILURE,
  FETCH_MINASDEV_JOBS_REQUEST,
  FETCH_MINASDEV_JOBS_SUCCESS,
  FETCH_MINASDEV_JOBS_FAILURE
} from "@reducers/MinasDev/types";

export const initialState = fromJS({
  isLoading: false,
  error: null,
  events: [],
  jobs: []
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
        }),
      [FETCH_MINASDEV_JOBS_REQUEST]: () => state.merge({ isLoading: true }),
      [FETCH_MINASDEV_JOBS_SUCCESS]: () =>
        state.merge({ isLoading: false, jobs: action.payload.jobs }),
      [FETCH_MINASDEV_JOBS_FAILURE]: () =>
        state.merge({
          isLoading: false,
          error: action.payload.error,
          jobs: action.payload.jobs
        })
    }
  );
};
