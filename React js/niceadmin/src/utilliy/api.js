// import axios from "axios";

// export const API_URL = `http://192.168.0.106:4100`
// const api = axios.create({
//     baseURL:API_URL,
// });
// //Object.freeze(api)

// export default api
import axios from "axios";

// const api = axios.create({
//   baseURL: "http://192.168.0.106:4100",
// });

const API_URL = `http://192.168.0.103:4100`
const api = axios.create({
    baseURL:API_URL,
});


// api.interceptors.request.use(    //  ther are manage axios internal request config
//   (config) => {                  //  config parameter
//     const token = localStorage.getItem("token");
//     if (token) {
    //       config.headers["Authorization"] = `Bearer ${token}`;
    //     }
    //     return config;
    //   },
    //   (error) => Promise.reject(error)
// );
export default api;

