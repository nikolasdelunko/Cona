import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
	message : false,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal = action.payload;
    },
		openMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const {
  openModal,
	openMessage,
} = helpersSlice.actions;

export default helpersSlice.reducer;
