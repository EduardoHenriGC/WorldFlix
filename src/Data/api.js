import axios from "axios";

const api = axios.create({
  baseURL: "http://worldflix.netlify.app//api",
});

export default api;
