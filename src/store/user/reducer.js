import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "./constants";

const initialState = {
  data: {},
  isLoggedIn: !!localStorage.getItem("refresh_token"),
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case LOGIN_ERROR:
    case REGISTRATION_ERROR:
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
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

export default userReducer;
