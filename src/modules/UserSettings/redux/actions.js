import { 
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER
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
    type: CREATE_USER
  }
}

