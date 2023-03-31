
import {
  CHANGE_APPEARANCE, CREATE_USER, DELETE_USER_FAILURE, DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS, LOGOUT_USER, UPDATE_USER, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from "./actionTypes";

export const loginUser = (user = {}) => {
  return {
    type: LOGIN_USER,
    payload: user
  }
};

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  }
};

export const loginUserSuccess = user => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
};

export const loginUserFailure = error => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  }
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
};

export const createUser = (user = {}) => {
  return {
    type: CREATE_USER,
    payload: user
  }
}

export const updateUser = (user = {}) => {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST
  }
}

export const updateUserSuccess = (user = {}) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  }
}

export const updateUserFailure = error => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  }
}

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST
  }
}

export const deleteUserSuccess = userId => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userId
  }
}

export const deleteUserFailure = error => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error
  }
}

export const changeAppearance = theme => {
  return {
    type: CHANGE_APPEARANCE,
    payload: theme
  }
}

