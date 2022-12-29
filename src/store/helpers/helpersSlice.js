import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const {
  openModal,
	setPage,
} = helpersSlice.actions;

export default helpersSlice.reducer;
