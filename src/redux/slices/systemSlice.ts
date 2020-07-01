import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// state の型
interface State {
  url: string;
  message: string;
  isLoading: boolean;
  isFetching: boolean;
  isAlerting: boolean;
  isConfirming: boolean;
  result: boolean;
}

// state の初期値
const initialState: State = {
  url: "/",
  message: "",
  isLoading: false,
  isFetching: false,
  isAlerting: false,
  isConfirming: false,
  result: false
};

// actions と reducers の定義
const slice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<State["url"]>) => {
      state.url = action.payload;
    },
    alert: (state, action: PayloadAction<State["message"]>) => {
      state.isAlerting = true;
      state.message = action.payload;
    },
    alertEnd: state => {
      state.isConfirming = false;
      state.message = "";
    },
    confirm: (state, action: PayloadAction<State["message"]>) => {
      state.isConfirming = true;
      state.message = action.payload;
    },
    confirmEnd: (state, action: PayloadAction<State["result"]>) => {
      state.isConfirming = false;
      state.message = "";
      state.result = action.payload;
    }
  }
});

export default slice;
export const systemActions = slice.actions;
export const systemSelector = (state: State) => {
  return state;
};
