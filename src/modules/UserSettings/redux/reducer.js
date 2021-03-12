import {
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER
} from "./actionTypes"

const INIT_STATE = {
  authenticated: false,
  user: {}
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

    case CREATE_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload
      }

    default:
      return { ...state };
  }
}