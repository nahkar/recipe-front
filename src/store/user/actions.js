import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "./constants";

import routes from "../../constants/routes";
import { notifyError, notifySuccess } from "./../../utils/tost";
import api from "../../utils/api";

const getLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

const getLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const getLoginError = () => ({
  type: LOGIN_ERROR,
});

const userLogout = () => ({
  type: USER_LOGOUT,
});

const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

const registrationSuccess = (payload) => ({
  type: REGISTRATION_SUCCESS,
  payload,
});

const registrationError = () => ({
  type: REGISTRATION_ERROR,
});

export const getUserLogin = (data, history) => (dispatch) => {
  dispatch(getLoginRequest());
  return api.user
    .login(data)
    .then((data) => {
      dispatch(getLoginSuccess(data));
      history.push(routes.main);
      notifySuccess("You have entered!");
    })
    .catch((err) => {
      dispatch(getLoginError());
      notifyError("Wrong credentials!");
    });
};

export const userLogOut = (history) => (dispatch) => {
  return api.user
    .logOut()
    .then(() => {
      dispatch(userLogout());
      localStorage.removeItem('refresh_token');
      history.push(routes.login);
      notifySuccess("You have logged out!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userRegistration = (data, history) => (dispatch) => {
  dispatch(registrationRequest());
  return api.user
    .createUser(data)
    .then((data) => {
      dispatch(registrationSuccess(data));
      history.push(routes.login);
      notifySuccess("You have created new user");
    })
    .catch((err) => {
      dispatch(registrationError());
      notifyError("Wrong credentials!");
    });
};
