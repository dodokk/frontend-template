import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import systemSlice from "./slices/systemSlice";
import sampleSlice from "./slices/sampleSlice";

// rootReducer の準備
const rootReducer = combineReducers({
  system: systemSlice.reducer,
  sample: sampleSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger]
});

export default store;
