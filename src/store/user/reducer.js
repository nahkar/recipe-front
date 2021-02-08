import { getDataFromToken } from '../../utils/token.service';
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
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_ERROR,
  USER_EMAIL,
} from './constants';

const initialState = {
  users: [],
  userId: getDataFromToken(localStorage.getItem('access_token'), 'id'),
  email: getDataFromToken(localStorage.getItem('access_token'), 'email'),
  isLoggedIn: !!localStorage.getItem('refresh_token'),
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
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

      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userId: getDataFromToken(payload.access_token, 'id'),
        email: getDataFromToken(payload.access_token, 'email'),
      };

    case REGISTRATION_REQUEST:
    case LOGOUT_REQUEST:
    case USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTRATION_ERROR:
    case LOGOUT_ERROR:
    case USERS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        userId:null,
        email:null,
        isLoggedIn: false,
        isLoading: false,
      };

    case USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
      };
      
    case USER_EMAIL:
      return {
        ...state,
        email: payload,
      }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
