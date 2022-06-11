import { SIGNIN_USER } from "../_actions/types";

export default function user(state = {}, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
}
