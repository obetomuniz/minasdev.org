import { takeEvery, all } from "redux-saga/effects";
import {
  FETCH_MINASDEV_EVENTS_REQUEST,
  FETCH_MINASDEV_JOBS_REQUEST
} from "@reducers/MinasDev/types";
import { fetchMinasDevEvents, fetchMinasDevJobs } from "@sagas/MinasDev";

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_MINASDEV_EVENTS_REQUEST, fetchMinasDevEvents),
    takeEvery(FETCH_MINASDEV_JOBS_REQUEST, fetchMinasDevJobs)
  ]);
}
