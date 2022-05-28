import http from "./httpService";
import config from "../config.json";
import User from "../models/User";
import { log } from "util";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/user`;

export async function register(user: User) {
  return await http.post(apiEndpoint, user);
}
