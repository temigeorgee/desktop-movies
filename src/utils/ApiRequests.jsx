import axios from "axios";
import { constant } from "./ApiConstants";
import { storageContainsToken, getTokenFromStorage } from "./ApiUtils";

// Resusable requests template
export const ApiRequest = () => {
  const config = { baseURL: constant.baseUrl };
  const instance = axios.create(config);
  return instance;
};

export const ApiRequestWithToken = () => {
  const config = { baseURL: constant.baseUrl };
  if (storageContainsToken()) {
    const token = getTokenFromStorage();
    config.headers = { Authorization: `Bearer ${token}` };
  }
  const instance = axios.create(config);
  return instance;
};
// End of reusable template requests

export const getCurrentlyLogged = () => {
  return ApiRequestWithToken().get("/user/current");
};

