import axios from "axios";

const api = axios.create({
  //baseURL: "http://192.168.3.191:3333/",
  // baseURL: "http://192.168.3.16:3333/",
  baseURL: "http://localhost:3333/",
});

// api.interceptors.request.use(async config => {
//     const token = getToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

export default api;
