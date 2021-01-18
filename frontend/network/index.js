import axios from "axios";
import Cookies from "js-cookie";

export const serverUrl =
  process.env.NODE_ENV === "development"
    ? "https://localhost:9000"
    : process.env.NODE_API;

const enforceTrailingSlash = (url) => {
  return url.endsWith("/") ? url : url + "/";
};

const config = {
  headers: {
    Authorization: `Bearer ${Cookies.get("Access-Token")}`,
  },
};

export function refreshConfig() {
  config[headers] = {
    Authorization: `Bearer ${Cookies.get("Access-Token")}`,
  };
}

export function getRequest(uri, searchParams) {
  const params = searchParams ? searchParams : "";
  return axios.get(enforceTrailingSlash(`${serverUrl}${uri}`) + params, config);
}

export function deleteRequest(uri) {
  return axios.delete(enforceTrailingSlash(`${serverUrl}${uri}`), config);
}

export function patchRequest(uri, data) {
  return axios.patch(enforceTrailingSlash(`${serverUrl}${uri}`), data, config);
}

export function postRequest(uri, data) {
  return axios.post(enforceTrailingSlash(`${serverUrl}${uri}`), data, config);
}
