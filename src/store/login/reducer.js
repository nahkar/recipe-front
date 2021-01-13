import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = {
  data: {},
  isLoggedIn: false,
  isLoading: false,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        data: payload,
        isLoggedIn: true,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
