import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { ToastContainer } from 'react-toastify';

import store from "./store/index";
import Routes from './routes/Routes';

import "./index.scss";
import 'react-toastify/dist/ReactToastify.css'; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
