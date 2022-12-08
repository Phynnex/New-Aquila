// import axios from "axios";
// // const API_URL = "https://dev.bitscard.co/api/";
// const API_URL = "https://aquiladev.herokuapp.com/api/";
// // const API_URL = "https://www.dev.bitscard.co/admin";
// // const API_URL = "https://reqres.in/api/";
// // const API_URL = "http://l9.bitscard.co/api/user/";

// // const register = (username, firstname, lastname, email, password, passwordConfirm) => {
// //   return axios.post(API_URL + "account", {
// //     username,
// //     firstname,
// //     lastname,
// //     email,
// //     password,
// //     passwordConfirm,
// //   });
// // };

// const login = async (email, password) => {
//   const response = await axios.post('https://aquiladev.herokuapp.com/api/token/', {
//     email,
//     password,
//   });
//   if (response.data.access_token) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }
//   return response.data;
// };

// // const logout = async (config) => {
// //   const response = await axios.post(API_URL + "logout",{}, config);
// //   if (response.data.success) {
// //     localStorage.removeItem("user");
// //   }
// //   return response.data;
// // };
// export default {
// //   register,
//   login,
// //   logout,
// };



import axios from "axios";
// const API_URL = "https://dev.bitscard.co/api/";
const API_URL = "https://aquiladev.herokuapp.com/api/";
// const API_URL = "https://www.dev.bitscard.co/admin";
// const API_URL = "https://reqres.in/api/";
// const API_URL = "http://l9.bitscard.co/api/user/";

// const register = (username, firstname, lastname, email, password, passwordConfirm) => {
//   return axios.post(API_URL + "account", {
//     username,
//     firstname,
//     lastname,
//     email,
//     password,
//     passwordConfirm,
//   });
// };

const login = async (email, password) => {
  const response = await axios.post('https://aquiladev.herokuapp.com/api/token/', {
    email,
    password,
  });
  if (response.data.access_token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// const logout = async (config) => {
//   const response = await axios.post(API_URL + "logout",{}, config);
//   if (response.data.success) {
//     localStorage.removeItem("user");
//   }
//   return response.data;
// };
export default {
//   register,
  login,
//   logout,
};