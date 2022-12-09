import http from "services/httpService";
import { checkExpiredUserToken, getUserToken } from "utils";
import { toast } from "react-toastify";

import {

  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  // GOOGLE_AUTH_SUCCESS,
  // GOOGLE_AUTH_FAIL,
  // FACEBOOK_AUTH_SUCCESS,
  // FACEBOOK_AUTH_FAIL,
  LOGOUT,
} from "./types";

export const load_user = () => async (dispatch) => {
  checkExpiredUserToken()
 const token  = getUserToken()
  if (token) {
    try {
      const res = await http.get(
        `${process.env.REACT_APP_API_URL}/api/token/`,
      );

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};



export const checkAuthenticated = () => async (dispatch) => {
  const token = getUserToken()
  
  if (token.access) {
    http.setJwt(token.access)

    const body = JSON.stringify({ refresh: token.refresh});
    
    try {
      const res = await http.post(
        `${process.env.REACT_APP_API_URL}/api/token/refresh/`,
        body
      );
      console.log("||||||||", res)
      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};



export const signup =
  (username, company, email, password, confirmPassword) => async (dispatch) => {
    const body = {
      email,
      username,
      company,
      password,
      confirmPassword};

    try {
      const res = await http.post(
        `${process.env.REACT_APP_API_URL}/auth/register/`,
        body
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
      toast.success("Registration Successfull, kindly check your email to verify")
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });
      let errors = {}
      if (err.response.status === 400) {
        toast.error = JSON.stringify ({errors})
      } else {
        toast.error('Network Error')
      }
    }
  };



  
export const verify = (token) => async (dispatch) => {

  const body = { token };

  try {
    await http.post(
      `${process.env.REACT_APP_API_URL}/auth/email-verify/`, body
    );

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};

export const reset_password = (email) => async (dispatch) => {
  const body = JSON.stringify({ email });

  try {
    await http.post(
      `${process.env.REACT_APP_API_URL}/auth/request-password-reset/`,
      body
    );

    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    
    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
      await http.post(
        `${process.env.REACT_APP_API_URL}auth/set-new-password/`,
        body
      );

      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};



