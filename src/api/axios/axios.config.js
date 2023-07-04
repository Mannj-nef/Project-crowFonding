import axios from "axios";

const apiServer = process.env.REACT_APP_API_SERVER;

export default axios.create({
  baseURL: apiServer,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const axiosPriveate = axios.create({
  baseURL: "http://localhost:4001",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});
