import { put, call } from "redux-saga/effects";
import {
  getMinasDevEventsSuccess,
  getMinasDevEventsFailure,
  getMinasDevJobsSuccess,
  getMinasDevJobsFailure
} from "@reducers/MinasDev/actions";
import { getMinasDevEvents, getMinasDevJobs } from "@services/Api";

if (typeof window === "undefined") {
  global.window = {
    localStorage: {
      setItem: () => null,
      getItem: () => null
    }
  };
}

export function* fetchMinasDevEvents() {
  try {
    const events = getMinasDevEvents();
    window.localStorage.setItem("events", JSON.stringify(events));
    yield put(getMinasDevEventsSuccess(events));
  } catch (error) {
    const events = JSON.parse(window.localStorage.getItem("events"));
    yield put(getMinasDevEventsFailure(error, events));
  }
}

export function* fetchMinasDevJobs() {
  try {
    const jobs = getMinasDevJobs();
    window.localStorage.setItem("jobs", JSON.stringify(jobs));
    yield put(getMinasDevJobsSuccess(jobs));
  } catch (error) {
    const jobs = JSON.parse(window.localStorage.getItem("jobs"));
    yield put(getMinasDevJobsFailure(error, jobs));
  }
}
