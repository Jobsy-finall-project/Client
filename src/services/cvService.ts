import config from "../config.json";
import CV from "../models/CV";
import http from "./httpService";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/cv`;

export async function saveCV(cv: CV) {
    return await http.post(`${apiEndpoint}`, cv);
}