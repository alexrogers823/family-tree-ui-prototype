import {
  LOGIN_USER,
  LOGOUT_USER
} from "./actionTypes"

const INIT_STATE = {
  authenticated: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case LOGIN_USER:
      return {
        ...state,
        authenticated: true
      }

    case LOGOUT_USER:
      return {
        ...state,
        authenticated: false
      }

    default:
      return { ...state };
  }
}