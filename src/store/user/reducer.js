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

const initialState = {
  data: {},
  isLoggedIn: !!localStorage.getItem('refresh_token'),
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case REGISTRATION_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoggedIn: true,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        isLoggedIn: false,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
