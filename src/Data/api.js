import axios from "axios";

const api = axios.create({
  baseURL: "worldflix.netlify.app/api",
});

export default api;
