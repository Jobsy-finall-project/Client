import config from "../config.json";
import http from "./httpService";
import Company from "../models/Company";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/company`;

export async function getAllCompanys() {
    return await http.get(`${apiEndpoint}/all`);
}

export async function getCompanyByHrId() {
    return await http.get(`${apiEndpoint}`);
}

export async function saveCompany(company: Company) {
    return await http.post(`${apiEndpoint}`, company);
}