import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRegister,
} from "./authServices";
import { toast } from "react-toastify";
import MESSAGES from "../../constants/message";
import { removeToken, setToken } from "../../utils/handleToken";
import { updateUser } from "./authSlice";

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

      yield handleFetchMe(asToken);
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.error?.message || MESSAGES.LOGIN_REJECT;

    toast.error(errorMessage);
    removeToken();
  }
}

function* handleFetchMe(token) {
  try {
    const { data } = yield call(requestAuthFetchMe, token);

    yield put(
      updateUser({
        user: data,
        accessToken: token,
      })
    );
  } catch (error) {
    toast.error(error);
  }
}

export { handleAuthRegister, handleAuthLogin };
