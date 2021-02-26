import {
  GET_ALL_FAMILY_MEMBERS,
  GET_FAMILY_MEMBER_BY_ID
} from "./actionTypes";

import { familyMembers } from '../../../memberData';

const INIT_STATE = {
  members: [],
};

export default (state =  INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_FAMILY_MEMBERS:
      return { 
        ...state,
        members: [ ...familyMembers ],
      }

    case GET_FAMILY_MEMBER_BY_ID:
      return {
        ...state,
        member: familyMembers[action.payload]
      }

    default:
      return { ...state };
  }
}