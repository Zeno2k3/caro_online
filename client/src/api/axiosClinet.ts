import axios from "axios"
import config from "../config/config";
import queryString from "query-string"

const axiosClient = axios.create({
    baseURL:  config.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
    timeout: 10000,
});


axiosClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            window.location.href = '/login';
            break;
          case 404:
            console.error('API endpoint not found');
            break;
          case 500:
            console.error('Server error');
            break;
          default:
            console.error('Unknown error');
        }
      }
      return Promise.reject(error);
    }
  );

export default axiosClient;