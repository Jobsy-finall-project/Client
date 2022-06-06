import config from "../config.json";
import CV from "../models/CV";
import http from "./httpService";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/cv`;

export async function saveCV(cv: CV) {
  return await http.post(`${apiEndpoint}`, cv);
}

export async function getAllCVs() {
  return await http.get(`${apiEndpoint}/all`);
}

export async function deleteCV(cvId: string) {
    return await http.delete(`${apiEndpoint}/${cvId}`)
}
