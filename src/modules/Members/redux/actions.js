import { 
  GET_ALL_FAMILY_MEMBERS,
  GET_ALL_FAMILY_MEMBERS_REQUEST,
  GET_ALL_FAMILY_MEMBERS_SUCCESS,
  GET_ALL_FAMILY_MEMBERS_FAILURE,
  GET_FAMILY_MEMBER_BY_ID
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