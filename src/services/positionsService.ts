import config from "../config.json";
import Position from "../models/Position";
import http from "./httpService";
import Step from "../models/Step";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/position`;

export async function savePosition(companyID: string, position: Position) {
    console.log("saveing Position", { companyID, position });

    return await http.post(`${apiEndpoint}/${companyID}`, position);
}

export async function getSuggestios(companyID: string, positionID: string) {
    return await http.get(
        `${apiEndpoint}/suggestions/${companyID}/${positionID}`
    );

}

export async function getPositionById(positionId: string) {
    const {data} = await http.get(`${apiEndpoint}/${positionId}`);
    return data;
}

