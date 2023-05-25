import { takeLatest } from "redux-saga/effects";
import { login, register } from "./authSlice";
import { requestAuthLogin, requestAuthRegister } from "./authServices";

function* watchAuthSaga() {
  yield takeLatest(register.type, requestAuthRegister);
  yield takeLatest(login.type, requestAuthLogin);
}

export default watchAuthSaga;
