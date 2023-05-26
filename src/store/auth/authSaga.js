import { takeLatest } from "redux-saga/effects";
import { login, register } from "./authSlice";
import { handleAuthLogin, handleAuthRegister } from "./authHandlers";

function* watchAuthSaga() {
  yield takeLatest(register.type, handleAuthRegister);
  yield takeLatest(login.type, handleAuthLogin);
}

export default watchAuthSaga;
