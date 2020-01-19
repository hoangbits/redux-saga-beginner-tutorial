import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import sagaMiddlewareFactory from "redux-saga";
import { helloSaga } from "./sagas";
import Counter from "./Counter";
import reducer from "./reducers";

const sagaMiddeleware = sagaMiddlewareFactory();
const store = createStore(reducer, applyMiddleware(sagaMiddeleware));
sagaMiddeleware.run(helloSaga);

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
