import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = {
  data: {},
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
