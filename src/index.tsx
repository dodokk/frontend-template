import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pages from "./views/Pages";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Pages />
  </Provider>,
  document.getElementById("root")
);
