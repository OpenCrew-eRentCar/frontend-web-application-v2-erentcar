import axios from "axios";

const instance = axios.create({
  //baseURL: "https://erentcar-evo.herokuapp.com/api/v1", // production
  baseURL: "http://localhost:8081/api/v1", // development
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (!config.url?.includes("users/auth/sign-in") && !config.url?.includes("users/auth/sign-up") && config.headers)
      config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;