import http from "./httpService";
import config from "../config.json";
import Step from "../models/Step";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/step`;

function stepUrl(id: String) {
    return `${apiEndpoint}/${id}`;
}


export async function saveStepToApllication(step: Step, applicationId: string) {
    const {data} = await http.post(`${apiEndpoint}/application/${applicationId}`, step);
    return data;
}

export async function saveStepToPosition(step: Step, positionId: string) {
    const {data} =  await http.post(`${apiEndpoint}/position/${positionId}`, step);
    return data;
}


