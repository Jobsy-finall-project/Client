import http from "./httpService";
import config from "../config.json";
import Track from "../models/Track";

const { apiUrl } = config;

const apiEndpoint = `${apiUrl}/application`;

function applicationUrl(id: String) {
  return `${apiEndpoint}/${id}`;
}

export async function getUserApplications() {
  const { data } = await http.get(`${apiEndpoint}/user/all`);
  return data;
}

export async function saveApplication(application: Track, companyId: string) {
  const {data} = await http.post(`${apiEndpoint}/${companyId}`, application);
  console.log(data);
  return data;
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
