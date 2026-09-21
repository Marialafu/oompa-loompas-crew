import { createSlice } from "@reduxjs/toolkit";

const oompaSlice = createSlice({
  name: "oompa",
  initialState: {
    items: [],
    details: [],
    loading: false,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
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
