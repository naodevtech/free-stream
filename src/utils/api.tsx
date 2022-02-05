import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_API_BASE_URL,
});

export default instance;
