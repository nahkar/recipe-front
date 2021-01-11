import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
// import Login from './components/Login/index';
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Login/> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
