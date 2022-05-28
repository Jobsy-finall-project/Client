import http from "./httpService";
import config from "../config.json";
import User from "../models/User";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/user`;

export async function register(user: User) {
  const { data } = await http.post(apiEndpoint, user);
  return data;
}
