import config from "../config.json";
import http from "./httpService";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/company`;

export async function getAllCompanys() {
    return await http.get(`${apiEndpoint}/all`)
}
