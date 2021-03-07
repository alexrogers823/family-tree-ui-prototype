import { USER_AUTHENTICATED } from "./actionTypes";

const INIT_STATE = {
  authenticated: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case USER_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      }

    default:
      return { ...state };
  }
}