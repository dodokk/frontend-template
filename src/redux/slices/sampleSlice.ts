import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Sample } from "../../utils/types";

// state の型
interface State {
  someNum: number;
  someStr: string;
  someList: Sample[];
}

// state の初期値
const initialState: State = {
  someNum: 0,
  someStr: "",
  someList: []
};

// actions と reducers の定義
const slice = createSlice({
  name: "sample",
  initialState: initialState,
  reducers: {
    changeNum: (state, action: PayloadAction<State["someNum"]>) => {
      state.someNum = action.payload;
    },
    changeStr: (state, action: PayloadAction<State["someStr"]>) => {
      state.someStr = action.payload;
    },
    addList: (state, action: PayloadAction<Sample>) => {
      state.someList = [...state.someList, action.payload];
    },
    initialize: state => {
      state.someNum = initialState.someNum;
      state.someStr = initialState.someStr;
      state.someList = initialState.someList;
    }
  }
});

export default slice;
export const sampleActions = slice.actions;
export const sampleSelector = (state: State) => {
  return state;
};
