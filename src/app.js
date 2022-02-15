import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./router/index";
import store from "./store";

import '../css/app.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
