import { takeLatest } from "redux-saga/effects";
import { authLogin, authRegister, authRefreshToken } from "./authSlice";
import {
  handleAuthLogin,
  handleAuthRegister,
  handleRefreshToken,
} from "./authHandlers";

function* watchAuthSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleRefreshToken);
}

export default watchAuthSaga;
