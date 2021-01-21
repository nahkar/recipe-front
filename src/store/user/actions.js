import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
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
  dispatch(registrationRequest());
  return api.user
    .createUser(registerData)
    .then((data) => {
      dispatch(registrationSuccess(data));
      history.push(routes.login);
      notifySuccess('You have created new user');
    })
    .catch((err) => {
      dispatch(registrationError());
      notifyError('Wrong credentials!');
    });
};
