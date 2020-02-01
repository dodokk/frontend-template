import axios from "axios";

const apiUrl = "http://localhost";
const headers = {};

export default axios.create({
  baseURL: apiUrl,
  headers: headers,
  responseType: "json"
});
