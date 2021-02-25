import {
  GET_ALL_FAMILY_MEMBERS
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

    default:
      return { ...state };
  }
}