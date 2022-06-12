import http from "./httpService";
import config from "../config.json";
import User from "../models/User";
import { log } from "util";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/user`;

export async function register(user: User) {
  return await http.post(apiEndpoint, user);
}

export async function getIntersectionTagsBetweenUserAndPosition(
  userId: string,
  positionId: string,
  cvId: string
) {
  return await http.get(`${apiEndpoint}/tags/${userId}/${positionId}/${cvId}`);
}

export async function getUserById(
  userId: string,
) {
  return await http.get(`${apiEndpoint}/${userId}`);
}
