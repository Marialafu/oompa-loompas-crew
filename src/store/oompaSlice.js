import { createSlice } from "@reduxjs/toolkit";

const oompaSlice = createSlice({
  name: "oompas",
  initialState: {
    items: [],
    details: [],
    lastFetch: null,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.lastFetch = Date.now();
    },
    addItems: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setItems, addItems, setDetails } = oompaSlice.actions;
export default oompaSlice;
