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
    const events = yield call(getMinasDevEvents);
    window.localStorage.setItem("events", JSON.stringify(events.data));
    yield put(getMinasDevEventsSuccess(events.data));
  } catch (error) {
    const events = JSON.parse(window.localStorage.getItem("events"));
    yield put(getMinasDevEventsFailure(error, events));
  }
}

export function* fetchMinasDevJobs() {
  try {
    const jobs = yield call(getMinasDevJobs);
    window.localStorage.setItem("jobs", JSON.stringify(jobs.data));
    console.log(123);
    yield put(getMinasDevJobsSuccess(jobs.data));
  } catch (error) {
    const jobs = JSON.parse(window.localStorage.getItem("jobs"));
    yield put(getMinasDevJobsFailure(error, jobs));
  }
}
