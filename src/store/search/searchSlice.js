import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const start = moment().startOf("month").format("YYYY-MM-DD");
const end = moment().endOf("month").format("YYYY-MM-DD");

// export const fetchTransfers = createAsyncThunk(
//   "search/fetchTransfers",
//   async function (params = { start, end }, { rejectWithValue }) {
//     try {
//       const res = await transactions(params.start, params.end);
//       if (!res.status === 200) {
//         console.log("Error from server");
//       }
//       return res.data.transactions;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchDataTransfers = createAsyncThunk(
//   "search/fetchDataTransfers",
//   async function (params = { start, end }, { rejectWithValue }) {
//     try {
//       const res = await transactions(params.start, params.end);
//       if (!res.status === 200) {
//         console.log("Error from server");
//       }
//       return res.data.transactions;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const initialFilters = {
  search: "",
  amount: { from: "", to: "" },
  date: { start: start, end: end },
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
  },
  // extraReducers: {
  //   [fetchTransfers.pending]: (state) => {
  //     state.status = "loading";
  //     state.error = null;
  //   },
  //   [fetchTransfers.fulfilled]: (state, action) => {
  //     state.status = "resolved";
  //     state.fetchArr = action.payload;
  //   },
  //   [fetchTransfers.reject]: (state, action) => {
  //     state.status = "rejected";
  //   },
  //   [fetchDataTransfers.pending]: (state) => {
  //     state.status = "loading";
  //     state.error = null;
  //   },
  //   [fetchDataTransfers.fulfilled]: (state, action) => {
  //     state.status = "resolved";
  //     state.fetchArr = [...state.fetchArr, ...action.payload];
  //   },
  //   [fetchDataTransfers.reject]: (state, action) => {
  //     state.status = "rejected";
  //   },
  // },
});

export const { setSearchArr, setloading, setSearch, setFilters, clearFilter } =
  userSlice.actions;

export default userSlice.reducer;
