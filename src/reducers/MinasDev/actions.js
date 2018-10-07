import { fromJS } from "immutable";
import _ from "lodash";
import {
  FETCH_MINASDEV_EVENTS_REQUEST,
  FETCH_MINASDEV_EVENTS_SUCCESS,
  FETCH_MINASDEV_EVENTS_FAILURE,
  FETCH_MINASDEV_JOBS_REQUEST,
  FETCH_MINASDEV_JOBS_SUCCESS,
  FETCH_MINASDEV_JOBS_FAILURE,
  FILTER_MINASDEV_JOBS
} from "@reducers/MinasDev/types";
import { getTagsPtBr } from "@services/Tags";

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

export const filterMinasDevJobs = (jobs, { filters }) => {
  const { searchTerm, tags } = filters;
  const searchTerms = searchTerm.split(",");

  let jobsFiltered = jobs.toJS();

  jobsFiltered = jobsFiltered.filter(job => {
    const regexString = searchTerms.map(term => `(?=.*${term.trim().toLowerCase()})`).join("");
    const regex = new RegExp(`${regexString}.*`, "");
    const tags = job.tags.join(" ").toLowerCase();
    const tagsPtBr = job.tags
      .map(tag => getTagsPtBr[tag])
      .join(" ")
      .toLowerCase();

    const str = `${job.position.toLowerCase()} ${job.source.toLowerCase()} ${tags} ${tagsPtBr}`;
    const result = str.match(regex);
    return result;
  });

  if (tags.length > 0) {
    jobsFiltered = jobsFiltered.filter(job => {
      const regexString = tags.map(tag => `(?=.*${tag.trim().toLowerCase()})`).join("");
      const regex = new RegExp(`${regexString}.*`, "");
      const str = job.tags.join(" ").toLowerCase();
      const result = str.match(regex);
      return result;
    });
  }

  return {
    type: FILTER_MINASDEV_JOBS,
    // payload: { jobsFiltered: jobs }
    payload: { jobsFiltered: fromJS(jobsFiltered) }
  };
};
