import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    isOpenModalProject: false,
    isOpenModalSearch: false,
    isOpenModelToastThanks: false,
  },
  reducers: {
    openModalProject: (state) => {
      state.isOpenModalProject = true;
    },
    closeModalProject: (state) => {
      state.isOpenModalProject = false;
    },
    openModalSearch: (state) => {
      state.isOpenModalSearch = true;
    },
    closeModalSearch: (state) => {
      state.isOpenModalSearch = false;
    },
    openModalToastThanks: (state) => {
      state.isOpenModelToastThanks = true;
    },
    closeModalToastThanks: (state) => {
      state.isOpenModelToastThanks = false;
    },
    closeModals: (state) => {
      state.isOpenModalProject = false;
      state.isOpenModalSearch = false;
      state.isOpenModelToastThanks = false;
    },
  },
});

export const {
  openModalProject,
  closeModalProject,
  openModalSearch,
  closeModalSearch,
  openModalToastThanks,
  closeModalToastThanks,
  closeModals,
} = modalSlice.actions;
export default modalSlice.reducer;
