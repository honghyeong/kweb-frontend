import axios from "axios";
import { SIGNIN_USER } from "./types";

export function signInUser(data) {
  const request = axios
    .post("/api/auth/signin", data)
    .then((response) => response.data);

  return {
    type: SIGNIN_USER,
    payload: request,
  };
}
