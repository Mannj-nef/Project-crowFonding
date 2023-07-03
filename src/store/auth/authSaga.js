import { takeLatest } from "redux-saga/effects";
import {
  authLogin,
  authRegister,
  authRefreshToken,
  authLogout,
} from "./authSlice";
import {
  handleAuthLogin,
  handleAuthRegister,
  handleLogOut,
  handleRefreshToken,
} from "./authHandlers";

function* watchAuthSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleRefreshToken);
  yield takeLatest(authLogout.type, handleLogOut);
}

export default watchAuthSaga;
