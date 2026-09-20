import { createSlice } from "@reduxjs/toolkit";

const oompaSlice = createSlice({
  name: "oompa",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default oompaSlice;
