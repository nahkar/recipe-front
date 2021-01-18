import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  REGISTR_REQUEST,
  REGISTR_SUCCESS,
  REGISTR_ERROR,
} from './constants';

import routes from '../../constants/routes';
import { notifyError, notifySuccess } from './../../utils/tost';
import api from '../../utils/api';


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
})

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

export const getUserLogin = (data, history) => (dispatch) => {
  dispatch(getLoginRequest());
  return api.user
    .login(data)
    .then((data) => {
      dispatch(getLoginSuccess(data));
      history.push(routes.main);
      notifySuccess('You have entered!');
    })
    .catch((err) => {
      dispatch(getLoginError(err))
      notifyError('Wrong credentials!');
    });
};

export const userLogOut = (history) => (dispatch) => {
  return api.user
    .logOut()
    .then((data) => {
      dispatch(userLogout(data));
      history.push(routes.login);
      notifySuccess('You have logged out!');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userRegistration = (data, history) => (dispatch) => {
  dispatch(registerRequest());
  return api.user.createUser(data).then((data) => {
    dispatch(registerSuccess(data));
    history.push(routes.login);
    notifySuccess('You have created new user')
  })
    .catch((err) => {
      dispatch(registerError(err));
      notifyError('Wrong credentials!')
  })
}
