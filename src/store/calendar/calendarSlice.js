import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: 2,
  startDate: null,
  endDate: null,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    toggleD(state, action) {
      const selected = action.payload;
      if (selected > 1) {
        state.toggle = 0;
      } else {
        state.toggle = selected + 1;
      }
    },
		clearToggle(state, action) {
			state.toggle = 2
			state.startDate = null
			state.endDate = null
		},
    setStartData(state, action) {
      state.startDate = action.payload;
    },
    setEndData(state, action) {
      state.endDate = action.payload;
    },
  },
});

export const { toggleD, setStartData, setEndData, clearToggle } = calendarSlice.actions;

export default calendarSlice.reducer;
