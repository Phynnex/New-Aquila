import jwt_decode from "jwt-decode";
import http from "services/httpService";

export const getUserToken = () => {
  const token = localStorage.getItem("user");
  if (!token) return null;
  const userToken = JSON.parse(token);
  return userToken;
};

export const checkExpiredUserToken = () => {
  try {
    const token = getUserToken();
    if (!token?.access) {
      window.location.href = "/login";
      localStorage.removeItem("user");
    }

    const decodedAccessToken = jwt_decode(token.access);

    const expiredAccessToken =
      decodedAccessToken.exp < new Date().getTime() / 1000;

    if (expiredAccessToken) {
      window.location.href = "/login";
      localStorage.removeItem("user");
      return;
    }

    http.setJwt(token?.access);
  } catch (error) {}
};
