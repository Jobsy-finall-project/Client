import config from "../config.json";
import Position from "../models/Position";
import http from "./httpService";

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