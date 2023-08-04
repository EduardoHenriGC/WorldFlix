import axios from "axios";

const api = axios.create({
  baseURL: "http://main--worldflix.netlify.app/api",
});

export default api;
