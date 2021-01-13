import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
import { toast } from 'react-toastify';

import api from '../../utils/api';

import 'react-toastify/dist/ReactToastify.css'; 

const notify = () => {
  toast.error('Wrong credentials!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};

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

export const getUserLogin = (data, history) => (dispatch) => {
  dispatch(getLoginRequest());
  return api.user
    .getUser(data)
    .then((data) => {
      dispatch(getLoginSuccess(data));
      history.push('/');
    })
    .catch((err) => {
      dispatch(getLoginError)
      notify();
      throw err;
    });
};
