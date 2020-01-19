import { put, takeEvery, call } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello saga");
}

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
