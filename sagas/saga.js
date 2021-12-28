import { takeLatest, put, call, delay } from "redux-saga/effects";

function* ageUpAsync() {
try {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}
  catch (error) {
    console.log(error);
  }
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}