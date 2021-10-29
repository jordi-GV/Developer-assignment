import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import Advertisements from "./AdvertisementReducer";


export const ConfigureStore = () => {
  const store = createStore(Advertisements, applyMiddleware(thunk, logger));

  return store;
};
