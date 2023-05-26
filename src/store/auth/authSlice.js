import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    register: (state, action) => {},
    updateUser: (state, action) => {},
  },
});

export const { login, register, updateUser } = authSlice.actions;
export default authSlice.reducer;
