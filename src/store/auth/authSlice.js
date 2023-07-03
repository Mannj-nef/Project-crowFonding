import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authLogin: (state) => {
      state.loading = true;
    },
    authRegister: (state) => {
      state.loading = true;
    },
    authUpdateUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    },
    authRefreshToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    },
    authLogout: (state) => {
      state.loading = true;
    },
  },
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authRefreshToken,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
