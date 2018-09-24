import { fromJS } from "immutable";
import {
  FETCH_MINASDEV_EVENTS_REQUEST,
  FETCH_MINASDEV_EVENTS_SUCCESS,
  FETCH_MINASDEV_EVENTS_FAILURE,
  FETCH_MINASDEV_JOBS_REQUEST,
  FETCH_MINASDEV_JOBS_SUCCESS,
  FETCH_MINASDEV_JOBS_FAILURE
} from "@reducers/MinasDev/types";

export const getMinasDevEvents = () => {
  return {
    type: FETCH_MINASDEV_EVENTS_REQUEST
  };
};

export const getMinasDevEventsSuccess = events => {
  return {
    type: FETCH_MINASDEV_EVENTS_SUCCESS,
    payload: { events }
  };
};

export const getMinasDevEventsFailure = (error, events = []) => {
  return {
    type: FETCH_MINASDEV_EVENTS_FAILURE,
    payload: { error, events }
  };
};

export const getMinasDevJobs = () => {
  return {
    type: FETCH_MINASDEV_JOBS_REQUEST
  };
};

export const getMinasDevJobsSuccess = jobs => {
  return {
    type: FETCH_MINASDEV_JOBS_SUCCESS,
    payload: { jobs }
  };
};

export const getMinasDevJobsFailure = (error, jobs = []) => {
  return {
    type: FETCH_MINASDEV_JOBS_FAILURE,
    payload: { error, jobs }
  };
};
