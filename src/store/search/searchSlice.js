import { createSlice } from "@reduxjs/toolkit";




const initialFilters = {
  search: "",
  amount: { from: "", to: "" },
  date: { start: '', end: '' },
};

const initialState = {
  search: false,
  fetchArr: [],
  filters: { ...initialFilters },
  sarchArr: [],
  loading: false,
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = {
        ...state.filters,
        [action.payload.key]: action.payload.value,
      };
    },
    clearFilter(state, action) {
      state.filters = {
        ...state.filters,
        [action.payload]: initialFilters[action.payload],
      };
    },
    setSearchArr(state, action) {
      state.sarchArr = action.payload;
    },
    setloading(state, action) {
      state.loading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },

    setFetchArr(state, action) {
      state.fetchArr = action.payload;
    },
  },
});

export const {
  setSearchArr,
  setloading,
  setSearch,
  setFilters,
  clearFilter,
  setFetchArr,
} = userSlice.actions;

export default userSlice.reducer;
