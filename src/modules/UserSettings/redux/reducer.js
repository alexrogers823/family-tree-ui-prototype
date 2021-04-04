import {
  CREATE_USER,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  UPDATE_USER,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CHANGE_APPEARANCE
} from "./actionTypes"

const INIT_STATE = {
  loading: false,
  isAuthenticated: false,
  user: {},
  theme: 'light',
  error: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true
      }

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      }

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
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

    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true
      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: {} // check to see how to permenately delete in database
      }

    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
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