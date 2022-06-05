import http from "./httpService";
import config from "../config.json";
import Track from "../models/Track";
import Step from "../models/Step";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/application`;

function applicationUrl(id: String) {
  return `${apiEndpoint}/${id}`;
}

export async function getUserApplications() {
  const { data } = await http.get(`${apiEndpoint}/user/all`);
  return data;
}

export async function getApplicationById(applicationId: string) {
    const { data } = await http.get(`${apiEndpoint}/${applicationId}`);
    console.log({data});
    return data;
}

export async function saveApplication(application: Track, companyId: string) {
  const {data} = await http.post(`${apiEndpoint}/${companyId}`, application);
  return data;
}

export async function suggestTrack(
    track: Track,
    compabyId: string | undefined,
    usersIds: (String | undefined)[]
) {
    return await http.post(`${apiEndpoint}/matches/${compabyId}`, {
        application: track,
        users: usersIds,
    });
}

export async function changeApplicationIsFavorite(
  applicationId: String,
  isFavorite: Boolean
) {
  const { data } = await http.put(applicationUrl(applicationId), {
    isFavorite,
  });
  return data;
}

export async function changeApplicationIsMatch(
    applicationId: String,
    isMatch: Boolean
) {
    const { data } = await http.put(applicationUrl(applicationId), {
      isMatch,
    });
    return data;
}

export async function deleteAplication(applicationId: string) {
    const { data } = await http.delete(applicationUrl(applicationId));
    return data;
}

export async function getAllApplicationsByPositionId(positionId: string) {
    return await http.get(`${apiEndpoint}/all/${positionId}`);
}
