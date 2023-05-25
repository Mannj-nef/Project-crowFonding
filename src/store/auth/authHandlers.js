import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./authServices";

function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister(payload));
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthLogin(payload));
  } catch (error) {
    console.log(error);
  }
}

export { handleAuthRegister, handleAuthLogin };
