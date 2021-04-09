import { 
  GET_ALL_FAMILY_MEMBERS,
  GET_ALL_FAMILY_MEMBERS_REQUEST,
  GET_ALL_FAMILY_MEMBERS_SUCCESS,
  GET_ALL_FAMILY_MEMBERS_FAILURE,
  GET_FAMILY_MEMBER_BY_ID,
  UPDATE_FAMILY_MEMBER,
  UPDATE_FAMILY_MEMBER_REQUEST,
  UPDATE_FAMILY_MEMBER_SUCCESS,
  UPDATE_FAMILY_MEMBER_FAILURE,
  DELETE_FAMILY_MEMBER_REQUEST,
  DELETE_FAMILY_MEMBER_SUCCESS,
  DELETE_FAMILY_MEMBER_FAILURE
} from "./actionTypes";

export const getAllFamilyMembers = () => {
  return {
    type: GET_ALL_FAMILY_MEMBERS
  }
};

export const getAllFamilyMembersRequest = () => {
  return {
    type: GET_ALL_FAMILY_MEMBERS_REQUEST
  }
};

export const getAllFamilyMembersSuccess = members => {
  return {
    type: GET_ALL_FAMILY_MEMBERS_SUCCESS,
    payload: members
  }
};

export const getAllFamilyMembersFailure = error => {
  return {
    type: GET_ALL_FAMILY_MEMBERS_FAILURE,
    payload: error
  }
};

export const getFamilyMemberById = id => {
  return {
    type: GET_FAMILY_MEMBER_BY_ID,
    payload: id
  }
};

export const updateFamilyMember = () => {
  return {
    type: UPDATE_FAMILY_MEMBER
  }
};

export const updateFamilyMemberRequest = () => {
  return {
    type: UPDATE_FAMILY_MEMBER_REQUEST
  }
};

export const updateFamilyMemberSuccess = (member = {}) => {
  return {
    type: UPDATE_FAMILY_MEMBER_SUCCESS,
    payload: member
  }
};

export const updateFamilyMemberFailure = error => {
  return {
    type: UPDATE_FAMILY_MEMBER_FAILURE,
    payload: error
  }
};

export const deleteFamilyMemberRequest = () => {
  return {
    type: DELETE_FAMILY_MEMBER_REQUEST
  }
};

export const deleteFamilyMemberSuccess = memberId => {
  return {
    type: DELETE_FAMILY_MEMBER_SUCCESS,
    payload: memberId
  }
};

export const deleteFamilyMemberFailure = error => {
  return {
    type: DELETE_FAMILY_MEMBER_FAILURE,
    payload: error
  }
};