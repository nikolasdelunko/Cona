import { configureStore } from "@reduxjs/toolkit";
import helpersSlice from "./helpers";
import calendarSlice from "./calendar";
import searchSlice from "./search";

export default configureStore({
  reducer: {
    helpers: helpersSlice,
    calendar: calendarSlice,
    search: searchSlice,
  },
});
