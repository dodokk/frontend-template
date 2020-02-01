import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sample } from "../../utils/types";

// state
export interface SampleState {
  someNum: number;
  someStr: string;
  someList: Sample[];
}

// state の初期値
const initialState: SampleState = {
  someNum: 0,
  someStr: "",
  someList: []
};

// actions と reducers の定義
const modules = createSlice({
  name: "sample",
  initialState: initialState,
  reducers: {
    changeNum: (state, action: PayloadAction<SampleState["someNum"]>) => {
      state.someNum = action.payload;
    },
    changeStr: (state, action: PayloadAction<SampleState["someStr"]>) => {
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

export default modules;
