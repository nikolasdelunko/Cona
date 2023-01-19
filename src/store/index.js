import { configureStore } from "@reduxjs/toolkit";
import helpersSlice from "./helpers";
import calendarSlice from "./calendar";

export default configureStore({
  reducer: {
    helpers: helpersSlice,
    calendar: calendarSlice,
  },
});
