// -- http connection library --
import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

// -- responses --
import {
  SampleIdGet200
  // YourResponseXXX,
} from "./responses";

// -- main funciton --

const toMock = (axios: AxiosInstance, status: number) => {
  // -- mock properation --
  const mock = new MockAdapter(axios);

  // -- 200 or Not --
  if (status === 200) {
    mock
      .onPost("/sample")
      .reply(200)
      .onGet("/sample/:id")
      .reply(200, SampleIdGet200)
      .onPut("/sample/:id")
      .reply(200)
      .onDelete("/sample/:id")
      .reply(200);
    // .onMethod("/yourEndpoint").reply(200, YourResponseXXX)
  } else {
    mock.onAny().reply(status);
  }
};

// -- finally export part --
export default toMock;
