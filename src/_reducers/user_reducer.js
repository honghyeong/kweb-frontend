import { LOGOUT_USER, SIGNIN_USER } from "../_actions/types";

export default function user(state = {}, action) {
  switch (action.type) {
    case SIGNIN_USER:
      console.log(action);
      return { ...state, loginSuccess: action.payload.signInSuccess };

    case LOGOUT_USER:
      console.log(action);
      return { ...state, loginSuccess: !action.payload.logoutSuccess };

    default:
      return state;
  }
}
