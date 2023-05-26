import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./authServices";
import { toast } from "react-toastify";
import MESSAGES from "../../constants/message";
import { removeToken, setToken } from "../../utils/handleToken";

function* handleAuthRegister(action) {
  const { payload } = action;

  try {
    const response = yield call(requestAuthRegister, payload);
    if (response) {
      toast.success(MESSAGES.REGISTER_SUCCESSFULL);
    }
  } catch (error) {
    toast.error("error");
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;

  try {
    const { data } = yield call(requestAuthLogin, payload);
    if (data) {
      const asToken = data.accessToken;
      const rfToken = data.refreshToken;
      toast.success(MESSAGES.LOGIN_SUCCESSFULL);
      setToken({ asToken, rfToken });
      yield handleFetchMe();
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.error?.message || MESSAGES.LOGIN_REJECT;

    toast.error(errorMessage);
    removeToken();
  }
}

function* handleFetchMe() {
  try {
    yield 1;
  } catch (error) {
    toast.error(error);
  }
}

export { handleAuthRegister, handleAuthLogin };
