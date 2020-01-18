import { combineReducers, configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import logger from "redux-logger";
import sampleModule from "./modules/sampleModule";

// rootReducer の準備
const rootReducer = combineReducers({
    sample: sampleModule.reducer
});

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
    const middlewares = [...getDefaultMiddleware(), logger];

    const store = configureStore({
        reducer: rootReducer,
        middleware: middlewares,
    });
    return store
}