import { takeEvery, all } from "redux-saga/effects";
import {
  FETCH_MINASDEV_EVENTS_REQUEST,
  FETCH_MINASDEV_JOBS_REQUEST
} from "@reducers/MinasDev/types";

export default function* rootSaga() {
  yield all([]);
}
