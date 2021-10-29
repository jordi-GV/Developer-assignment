import { configureStore } from "@reduxjs/toolkit";

import Advertisements from "../redux/AdvertisementReducer";


const store = configureStore({
  reducer: Advertisements
});

export default store;
