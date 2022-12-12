import axios from "axios";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    if (error.Error === "Network Error") {
      console.error("Network Error");
    }
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  // axios.defaults.headers.set("Access-Control-Allow-Origin")
  axios.defaults.headers.append('Access-Control-Allow-Origin', '*');

}


// axios.interceptors.request.use(function (error) {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     logger.log(error);
//     if (error.Error === "Network Error") {
//       console.error("Network Error");
//     }
//   }

//   return Promise.reject(error);
// });


let http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};



export default http;