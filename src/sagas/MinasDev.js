import { put, call } from "redux-saga/effects";
import {
  getMinasDevEventsSuccess,
  getMinasDevEventsFailure,
  getMinasDevJobsSuccess,
  getMinasDevJobsFailure
} from "@reducers/MinasDev/actions";
import { getMinasDevEvents, getMinasDevJobs } from "@services/Api";

export function* fetchMinasDevEvents() {
  try {
    const events = yield call(getMinasDevEvents);
    localStorage.setItem("events", JSON.stringify(events.data));
    yield put(getMinasDevEventsSuccess(events.data));
  } catch (error) {
    const events = JSON.parse(localStorage.getItem("events"));
    yield put(getMinasDevEventsFailure(error, events));
  }
}

export function* fetchMinasDevJobs() {
  try {
    const jobs = yield call(getMinasDevJobs);
    localStorage.setItem("jobs", JSON.stringify(jobs.data));
    yield put(getMinasDevJobsSuccess(jobs.data));
  } catch (error) {
    const jobs = JSON.parse(localStorage.getItem("jobs"));
    yield put(getMinasDevJobsFailure(error, jobs));
  }
}
