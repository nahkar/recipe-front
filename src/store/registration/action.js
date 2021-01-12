import { POST_ERROR, POST_REQUEST, POST_SUCCESS } from "./constants";
export const postRequest = () => {
  return {
    type: POST_REQUEST,
  };
};
export const postError = () => {
  return {
    type: POST_ERROR,
  };
};
export const postSuccess = (payload) => {
  return {
    type: POST_SUCCESS,
    payload,
  };
};
