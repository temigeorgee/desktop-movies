import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://apis.woozeee.com/api/v1",
  baseURL: "https://sapis.woozeee.com/api/v1",
  // baseURL: "http://3.130.141.230/api/v1",
});
if (localStorage.authToken) {
  axiosInstance.interceptors.request.use(
    function (config) {
      config.headers = { Authorization: `Bearer ${localStorage.authToken}` };
      return config;
    },
    null,
    { synchronous: true }
  );
}

export default axiosInstance;

export const constant = {
  // baseUrl: "https://apis.woozeee.com/api/v1",
  baseUrl: "https://sapis.woozeee.com/api/v1",
  // baseUrl: "http://3.130.141.230/api/v1",
};
