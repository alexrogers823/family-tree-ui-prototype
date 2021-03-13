import {
  GET_ALL_FAMILY_MEMBERS,
  GET_ALL_FAMILY_MEMBERS_REQUEST,
  GET_ALL_FAMILY_MEMBERS_SUCCESS,
  GET_ALL_FAMILY_MEMBERS_FAILURE,
  GET_FAMILY_MEMBER_BY_ID
} from "./actionTypes";

import { familyMembers } from '../../../memberData';
import { GET_ALL_ARTIFACTS_FAILURE } from "../../Artifacts/redux/actionTypes";

const INIT_STATE = {
  loading: false,
  members: [],
  error: ''
};

export default (state =  INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_FAMILY_MEMBERS:
      return { 
        ...state,
        members: [ ...familyMembers ],
      }

    case GET_ALL_FAMILY_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_FAMILY_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: action.payload
      }

    case GET_ALL_FAMILY_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
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