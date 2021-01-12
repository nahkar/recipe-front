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

export const getUserLogin = (data) => (dispatch) => {
  dispatch(getLoginRequest());
  api.user
    .getUser(data)
    .then((data) => dispatch(getLoginSuccess(data)))
    .catch((err) => dispatch(getLoginError));
};
