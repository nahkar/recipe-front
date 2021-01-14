import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.scss";
import Header from "./components/Header";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Header /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
