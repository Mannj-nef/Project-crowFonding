import axios from "axios";

const apiServer = process.env.REACT_APP_API_SERVER;

export default axios.create({
  baseURL: apiServer,
  headers: {
    Authenticator: "",
  },
});
