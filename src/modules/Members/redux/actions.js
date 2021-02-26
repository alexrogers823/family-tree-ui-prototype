import { 
  GET_ALL_FAMILY_MEMBERS,
  GET_FAMILY_MEMBER_BY_ID
} from "./actionTypes";

export const getAllFamilyMembers = () => {
  return {
    type: GET_ALL_FAMILY_MEMBERS
  }
};

export const getFamilyMemberById = id => {
  return {
    type: GET_FAMILY_MEMBER_BY_ID,
    payload: id
  }
};