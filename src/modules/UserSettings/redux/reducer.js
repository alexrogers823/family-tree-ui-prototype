import {
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  CHANGE_APPEARANCE
} from "./actionTypes"

const INIT_STATE = {
  isAuthenticated: false,
  user: {},
  theme: 'light'
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false
      }

    case CREATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }

    case CHANGE_APPEARANCE:
      return {
        ...state,
        theme: action.payload
      }

    default:
      return { ...state };
  }
}