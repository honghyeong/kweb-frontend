import axios from "axios";
import { setCookie } from "../utils/Cookie";
import { LOGOUT_USER, SIGNIN_USER } from "./types";

export function signInUser(data) {
  const request = axios
    .post("/api/auth/signin", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err && err.response.status == 401) {
        alert("Login Failed");
      }
    });

  return {
    type: SIGNIN_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .post("/api/auth/logout")
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
