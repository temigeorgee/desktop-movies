import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis.woozeee.com/api/v1",
});

export default instance;

export const constant = {
  baseUrl: "https://apis.woozeee.com/api/v1",
};
