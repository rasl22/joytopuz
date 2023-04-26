import axios from "axios";

axios.defaults.baseURL = "http://194.146.39.113:8081/api/v1/";

axios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default axios;
