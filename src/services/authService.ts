import http from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";
import DecodeJwt from "./../models/DecodeJwt";
import { WindowOutlined } from "@mui/icons-material";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/auth`;

const tokenKey = "token";

http.setJwt(getJwt() || "");

export async function login(email: String, password: String) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  if (typeof jwt === "string") localStorage.setItem(tokenKey, jwt);
  http.setJwt(getJwt() || "");
}

export function loginWithJwt(jwt: string) {
  localStorage.setItem(tokenKey, jwt);
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function userIsConnect() {
  const jwt = localStorage.getItem(tokenKey);
  if (jwt) {
    const user: DecodeJwt = jwtDecode(jwt);
    return user;
  }
}

export function getCurrentUser() {
  const jwt = localStorage.getItem(tokenKey);
  if (jwt) {
    const user: DecodeJwt = jwtDecode(jwt);
    return user;
  }
  const stubuser:DecodeJwt  = {
    _id: "0",
    firstName: "Maya",
    lastName: "Assayag",
    role: "Admin",
    userName: "maya222",
    email: "email@gmail.com",
    cvs: [],
    applications: []
  }

  return stubuser
}
