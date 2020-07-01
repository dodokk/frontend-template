// -- redux library --
import store from "../../redux/store";
import { systemActions } from "../../redux/slices/systemSlice";

// -- success handler --

const onSuccess = (response: any) => {
  return response;
};

// -- error handler --

const onError = (err: any) => {
  // -- get message --
  const { statusCode, data } = err.response;
  const message = `${statusCode} エラー`;

  // -- display message --
  store.dispatch(systemActions.alert(message));
};

// -- finally export part --

export { onSuccess, onError };
