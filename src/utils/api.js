import axios from 'axios';

const BASE_URL = `https://stormy-badlands-73681.herokuapp.com`;

// const BASE_URL = process.env.REACT_APP_URL;
// console.log('BASE_URL', process.env.REACT_APP_URL);
// console.log('PORT', process.env.REACT_APP_PORT);
// console.log(process.env);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const api = {
  user: {
    createUser: (data) => axiosInstance.post(`/user`, data),

    deleteUser: (id) => axiosInstance.delete(`/user/${id}`),

    changeUser: (id, data) => axiosInstance.put(`/user/${id}`, data),

    getUsers: () => axiosInstance.get(`/user`),

    fetchCategories: () => axiosInstance.get(`/category`),
    createCategory: (data) => axiosInstance.post(`/category`, data),
    createRecipe: (data) => axiosInstance.post(`/recipe`, data),
    fetchRecipes: () => axiosInstance.get(`/recipe`),

    login: (body) => {
      return axiosInstance.post(`/auth/login`, body).then(({ data, body }) => {
        console.log(body);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('expires_in', data.expires_in);
        localStorage.setItem('refresh_token', data.refresh_token);
        return data;
      });
    },

    logOut: (refreshToken) => {
      return axiosInstance.post(`/auth/logout`, {
        refreshToken,
      });
    },
    // getUserLogin: () => axiosInstance.post(``)
  },
};

export default api;
