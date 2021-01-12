import axios from "axios";

const BASE_URL = `https://stormy-badlands-73681.herokuapp.com`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const api = {
  registration: {
    postRequest: (data) => axios.post(BASE_URL, { data }),
  },
  user: {
    getUser: (body) => {
      return axiosInstance.post(`/auth/login`, body).then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("expires_in", data.expires_in);
        localStorage.setItem("refresh_token", data.refresh_token);
      });
    },
  },
};

export default api;
