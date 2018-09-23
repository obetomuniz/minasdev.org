import { put, call } from "redux-saga/effects";
import { getMinasDevEventsSuccess, getMinasDevEventsFailure } from "@reducers/MinasDev/actions";
import { getMinasDevEvents } from "@services/Api";

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
