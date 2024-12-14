import axios from "axios";

export const axiosInstance = (apiEndPoint: string) =>
  axios.create({
    baseURL: apiEndPoint,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
