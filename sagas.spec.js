import test from "tape";
import { put, call } from "redux-saga/effects";
import { incrementAsync, delay } from "./sagas";

test("IncrementAsync saga test", assert => {
  const gen = incrementAsync();

  // assert.deepEqual(
  //   gen.next(),
  //   { done: false, value: {} },
  //   "incrementAsync should return a Promise that will resolve after 1 second"
  // );

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "IncrementAsync Saga must call delay(1000)"
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: "INCREMENT" }),
    "IncrementAsync Saga must dispatch an INCREMENT action"
  );

  assert.deepEqual(
    gen.next(),
    { value: undefined, done: true },
    "IncrementAsync Saga must be done"
  );

  assert.end();
});
