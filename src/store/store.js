import { configureStore } from "@reduxjs/toolkit";
import oompaSlice from "./oompaSlice";

const store = configureStore({
  reducer: {
    oompas: oompaSlice.reducer,
  },
});

export default store;
