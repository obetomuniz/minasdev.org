import { fromJS } from "immutable";
import {
  FETCH_MINASDEV_EVENTS_REQUEST,
  FETCH_MINASDEV_EVENTS_SUCCESS,
  FETCH_MINASDEV_EVENTS_FAILURE,
  FETCH_MINASDEV_JOBS_REQUEST,
  FETCH_MINASDEV_JOBS_SUCCESS,
  FETCH_MINASDEV_JOBS_FAILURE,
  FILTER_MINASDEV_JOBS
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

export const filterMinasDevJobs = (jobs, filters) => {
  let jobsFiltered = jobs.toJS().filter(job => {
    return (
      job.position.toLowerCase().indexOf(filters.value.toLowerCase()) >= 0 ||
      job.tags
        .join(",")
        .toLowerCase()
        .indexOf(filters.value.toLowerCase()) >= 0 ||
      job.source.toLowerCase().indexOf(filters.value.toLowerCase()) >= 0
    );
  });

  return {
    type: FILTER_MINASDEV_JOBS,
    payload: { jobsFiltered: fromJS(jobsFiltered) }
  };
};
