import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const api = {
  registration: {
    postRequest: (data) => axios.post(BASE_URL, { data }),
  },
};
export default api;
