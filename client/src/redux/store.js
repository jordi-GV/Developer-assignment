import { configureStore } from "@reduxjs/toolkit";

import advsReducer from '../features/advertisments/advsSlice'

const store = configureStore({
  reducer:{
    advs : advsReducer
  }
});

export default store;
