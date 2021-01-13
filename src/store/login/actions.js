import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
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
      throw err;
    });
};
