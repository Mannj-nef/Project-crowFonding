import axios from "axios";
import { getToken } from "./handleToken";
import { authUpdateUser } from "../store/auth/authSlice";

const handleRefreshToken = async () => {
  const refreshToken = getToken.refreshToken();

  try {
    const { data } = await axios.post("/token", {
      "Content-Type": "Application/json",
      refreshToken,
    });

    if (!data) return "";

    authUpdateUser((prev) => ({
      ...prev,
      accessToken: data?.accessToken,
    }));

    return data?.accessToken;
  } catch (error) {
    console.log(error);
  }
};

export default handleRefreshToken;
