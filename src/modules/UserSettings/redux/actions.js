import moment from 'moment';

import { 
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  CHANGE_APPEARANCE
} from "./actionTypes";

export const loginUser = () => {
  return {
    type: LOGIN_USER
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

export const changeAppearance = theme => {
  return {
    type: CHANGE_APPEARANCE,
    payload: theme
  }
}

