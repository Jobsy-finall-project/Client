import http from "./httpService";
import config from "../config.json";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/auth`;

export function login(email: String, password: String) {
  return http.post(apiEndpoint, { email, password });
}
