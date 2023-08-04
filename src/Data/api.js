import axios from "axios";

const api = axios.create({
  baseURL: "https://worldflix.netlify.app/api",
});

export default api;
