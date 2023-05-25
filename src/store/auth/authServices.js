import { axios } from "../../api/axios";

const requestAuthRegister = (data) => {
  return axios.post("/auth/register", data);
};

const requestAuthLogin = (data) => {
  return axios.post("/auth/login", data);
};

export { requestAuthRegister, requestAuthLogin };
