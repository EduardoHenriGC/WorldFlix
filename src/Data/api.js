import axios from "axios";

const api = axios.create({
  baseURL: "https://main--admirable-bunny-777d3d.netlify.app/api",
});

export default api;
