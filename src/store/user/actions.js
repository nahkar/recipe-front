import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  REGISTR_REQUEST,
  REGISTR_SUCCESS,
  REGISTR_ERROR,
} from './constants';

import routes from '../../constants/routes';
import { notifyError, notifySuccess } from './../../utils/tost';
import api from '../../utils/api';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginError = () => ({
  type: LOGIN_ERROR,
});

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutError = () => ({
  type: LOGOUT_ERROR,
});

const registerRequest = () => ({
  type: REGISTR_REQUEST,
});

const registerSuccess = (payload) => ({
  type: REGISTR_SUCCESS,
  payload,
});

const registerError = () => ({
  type: REGISTR_ERROR,
});

export const userLogin = ({ data, history }) => (dispatch) => {
  dispatch(loginRequest());
  return api.user
    .login(data)
    .then((data) => {
      dispatch(loginSuccess(data));
      history.push(routes.main);
      notifySuccess('You have entered!');
    })
    .catch((err) => {
      dispatch(loginError());
      notifyError('Wrong credentials!');
    });
};

export const userLogOut = ({ history, refreshToken }) => (dispatch) => {
  dispatch(logoutRequest());
  return api.user
    .logOut(refreshToken)
    .then(() => {
      dispatch(logoutSuccess());
      localStorage.clear();
      history.push(routes.login);
      notifySuccess('You have logged out!');
    })
    .catch((err) => {
      dispatch(logoutError());
      console.log(err);
    });
};

export const userRegistration = ({ registerData, history }) => (dispatch) => {
  dispatch(registerRequest());
  return api.user
    .createUser(registerData)
    .then((data) => {
      dispatch(registerSuccess(data));
      history.push(routes.login);
      notifySuccess('You have created new user');
    })
    .catch((err) => {
      dispatch(registerError());
      notifyError('Wrong credentials!');
    });
};
