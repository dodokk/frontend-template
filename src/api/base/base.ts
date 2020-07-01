// -- http connection library --
import axios from "axios";

// -- external functions --
import toMock from "./mock";
import { onSuccess, onError } from "./handlers";

// -- main function --

const setAxios = () => {
  // -- authorized http client --
  const client = axios.create({
    headers: {},
    responseType: "json"
  });

  // -- set handlers --
  client.interceptors.response.use(onSuccess, onError);

  // -- set mock or Not --
  if (process.env.NODE_ENV === "development") {
    const status = 200; // 200, 400, 401, 500, ...etc
    toMock(client, status);
  }

  // -- return part --
  return client;
};

// -- finally export part --

export default setAxios;
