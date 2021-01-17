import axios from "axios";

export const serverUrl =
  process.env.NODE_ENV === "development"
    ? "https://localhost:9000"
    : process.env.NODE_API;

const enforceTrailingSlash = (url) => {
  return url.endsWith("/") ? url : url + "/";
};

export function getRequest(uri, searchParams) {
  const params = searchParams ? searchParams : "";
  console.log(serverUrl);
  return axios.get(enforceTrailingSlash(`${serverUrl}${uri}`) + params);
}

export function deleteRequest(uri) {
  return axios.delete(enforceTrailingSlash(`${serverUrl}${uri}`));
}

export function patchRequest(uri, data) {
  return axios.patch(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}

export function postRequest(uri, data) {
  return axios.post(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}
