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

const requestAuthFetchMe = (token) => {
  if (!token) return;

  return axios.get(endpoints.me, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const requestAuthRefreshToken = (token) => {
  if (!token) return;

  return axios.post(endpoints.token, { refreshToken: token });
};

export {
  requestAuthRegister,
  requestAuthLogin,
  requestAuthFetchMe,
  requestAuthRefreshToken,
};
