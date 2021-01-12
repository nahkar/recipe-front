import { POST_ERROR, POST_REQUEST, POST_SUCCESS } from "./constants";

const initState = {
  data: [],
  loading: false,
};

export default function postReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_ERROR:
      return {
        ...state,
        loading: false,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
