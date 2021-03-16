import {
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
  CLOSE_REGISTER_MODAL,
  OPEN_ADD_MEMBER_MODAL,
  CLOSE_ADD_MEMBER_MODAL
} from './actionTypes';

const INIT_STATE = {
  loginModalOpen: false,
  registerModalOpen: false,
  addMemberModalOpen: false
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return {
        loginModalOpen: true,
        registerModalOpen: false,
        addMemberModalOpen: false
      }

    case CLOSE_LOGIN_MODAL:
      return {
        loginModalOpen: false,
        registerModalOpen: false,
        addMemberModalOpen: false
      }

    case OPEN_REGISTER_MODAL:
      return {
        loginModalOpen: false,
        registerModalOpen: true,
        addMemberModalOpen: false
      }

    case CLOSE_REGISTER_MODAL:
      return {
        loginModalOpen: false,
        registerModalOpen: false,
        addMemberModalOpen: false
      }

    case OPEN_ADD_MEMBER_MODAL:
      return {
        loginModalOpen: false,
        registerModalOpen: false,
        addMemberModalOpen: true
      }

    case CLOSE_ADD_MEMBER_MODAL:
      return {
        loginModalOpen: false,
        registerModalOpen: false,
        addMemberModalOpen: false
      }

    default:
      return { ...state }
  }
}

