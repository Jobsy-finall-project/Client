import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(
  res => res,
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log("Logging the error", error);
      toast.error("An unexpected error occurred.");
    }
    return Promise.reject(error);
  }
);

export function setJwt(jwt: string) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
