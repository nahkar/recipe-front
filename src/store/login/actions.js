import { LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export const logIn = () => ({
  type: LOGIN_SUCCESS,
});

export const logOut = () => ({
  type: LOGIN_FAILED,
});
