import moment from 'moment';
import { DELETE_QUESTION_REQUEST } from '../../FrequentlyAskedQuestions/redux/actionTypes';

import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  CREATE_USER,
  UPDATE_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CHANGE_APPEARANCE
} from "./actionTypes";

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

export const createUser = () => {
  return {
    type: CREATE_USER,
    payload: {
      id: 1,
      firstName: "Barry",
      middleName: "Alex",
      lastName: "Rogers",
      email: "alex.rogers823@gmail.com",
      password: "test",
      createdOn: moment("2021-03-01"),
      lastLoggedIn: moment()
    }
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

