import test from "tape";
import { incrementAsync } from "./sagas";

test("IncrementAsync saga test", assert => {
  const gen = incrementAsync();
  assert.deepEqual(
    gen.next(),
    { done: false, value: {} },
    "incrementAsync should return a Promise that will resolve after 1 second"
  );

  assert.end();
});
