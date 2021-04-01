import moment from 'moment';

import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  CREATE_USER,
  UPDATE_USER,
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

export const changeAppearance = theme => {
  return {
    type: CHANGE_APPEARANCE,
    payload: theme
  }
}

