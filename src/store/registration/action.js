import { POST_ERROR, POST_REQUEST, POST_SUCCESS } from "./constants";
import api from "../../utils/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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

export const createUser = (data, history) => (dispatch) => {
  dispatch(postRequest());
  api.user
    .createUser(data)
    .then((data) => {
      dispatch(postSuccess(data));
      history.push("/login");
      toast.success("You registered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      dispatch(postError(err));
      toast.error("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};
