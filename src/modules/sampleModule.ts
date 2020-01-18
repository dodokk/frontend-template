import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 型定義
export interface Sample {
  some_member: string;
}

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
    changeNum: (state, action: PayloadAction<number>) => {
      state.someNum = action.payload;
    },
    changeStr: (state, action: PayloadAction<string>) => {
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
