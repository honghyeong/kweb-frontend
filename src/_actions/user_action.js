import axios from "axios";
import { SIGNIN_USER, SIGNUP_USER } from "./types";

export function signInUser(data) {
  const request = axios
    .post("/api/auth/signin", data)
    .then((response) => response.data);

  return {
    type: SIGNIN_USER,
    payload: request,
  };
}

export function signUpUser(data) {
  const request = axios
    .post("/api/auth/signup", data)
    .then((response) => response.data);

  return {
    type: SIGNUP_USER,
    payload: request,
  };
}
