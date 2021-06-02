import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import users from "./reducers/users";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  users,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
