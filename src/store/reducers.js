import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./modal/modalSlice";
import authSlice from "./auth/authSlice";

export const reducer = combineReducers({
  modal: modalSlice,
  auth: authSlice,
});

export default reducer;
