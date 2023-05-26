import { endpoints } from "../../api/apiConfig.js";
import { axios } from "../../api/axios";

/**
 *
 * @param {*} data {
 *  fullName: string
 *  email: string
 *  password: string
 * }
 * @returns
 */

const requestAuthRegister = (data) => {
  return axios.post(endpoints.authRegister, data);
};

const requestAuthLogin = (data) => {
  return axios.post(endpoints.authLogin, data);
};

export { requestAuthRegister, requestAuthLogin };
