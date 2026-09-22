import { createSlice } from "@reduxjs/toolkit";

const oompaSlice = createSlice({
  name: "oompas",
  initialState: {
    items: [],
    lastRequest: null,
    currentPage: 1,
    totalPages: null,
    details: {},
  },
  reducers: {
    setItemsData: (state, action) => {
      const { results, current, total } = action.payload;

      state.items = results;
      state.lastRequest = Date.now();
      state.currentPage = current;
      state.totalPages = total;
    },
    addItems: (state, action) => {
      state.items = [...state.items, ...action.payload.results];
      state.currentPage = action.payload.current;
    },
    setDetails: (state, action) => {
      const { id, oompa } = action.payload;

      state.details[id] = {
        data: oompa,
        lastRequest: Date.now(),
      };
    },
  },
});

export const { setItemsData, addItems, setDetails } = oompaSlice.actions;
export default oompaSlice;
