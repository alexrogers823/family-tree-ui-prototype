import {
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
  CLOSE_REGISTER_MODAL,
  OPEN_ADD_MEMBER_MODAL,
  CLOSE_ADD_MEMBER_MODAL
} from './actionTypes';

export const openLoginModal = () => {
  return {
    type: OPEN_LOGIN_MODAL
  }
};

export const closeLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL
  }
};

export const openRegisterModal = () => {
  return {
    type: OPEN_REGISTER_MODAL
  }
};

export const closeRegisterModal = () => {
  return {
    type: CLOSE_REGISTER_MODAL
  }
};

export const openAddMemberModal = () => {
  return {
    type: OPEN_ADD_MEMBER_MODAL
  }
};

export const closeAddMemberModal = () => {
  return {
    type: CLOSE_ADD_MEMBER_MODAL
  }
};