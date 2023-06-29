import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authLogin: (state, action) => {},
    authRegister: (state, action) => {},
    authUpdateUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    authRefreshToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { authLogin, authRegister, authUpdateUser, authRefreshToken } =
  authSlice.actions;
export default authSlice.reducer;
