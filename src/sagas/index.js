import { takeEvery, all } from "redux-saga/effects";
import { FETCH_MINASDEV_EVENTS_REQUEST } from "@reducers/MinasDev/types";
import { fetchMinasDevEvents } from "@sagas/MinasDev";

export default function* rootSaga() {
  yield all([takeEvery(FETCH_MINASDEV_EVENTS_REQUEST, fetchMinasDevEvents)]);
}
