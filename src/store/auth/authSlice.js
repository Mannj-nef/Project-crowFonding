import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {},
    register: (state) => {},
  },
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
