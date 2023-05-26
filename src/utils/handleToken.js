import Cookies from "js-cookie";

const asTokenKey = "crow_access_token";
const rfTokenKey = "crow_refresh_token";
const cookieDomain = process.env.REACT_APP_COOKIE_DOMAIN;

const objConfigCookies = {
  expires: 7,
  domain: cookieDomain,
  path: "/",
};

const setToken = ({ asToken, rfToken }) => {
  Cookies.set(asTokenKey, asToken, objConfigCookies);
  Cookies.set(rfTokenKey, rfToken, objConfigCookies);
};

const removeToken = () => {
  Cookies.remove(asTokenKey, objConfigCookies);
  Cookies.remove(rfTokenKey, objConfigCookies);
};

const getToken = {
  accessToken: () => Cookies.get(asTokenKey),
  refreshToken: () => Cookies.get(rfTokenKey),
  all: () => {
    const accessToken = getToken.accessToken();
    const refreshToken = getToken.refreshToken();

    return [accessToken, refreshToken];
  },
};

export { setToken, removeToken, getToken };
