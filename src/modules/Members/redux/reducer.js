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

import { familyMembers } from '../../../memberData';

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

    case UPDATE_FAMILY_MEMBER_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_FAMILY_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        member: action.payload
      }

    case UPDATE_FAMILY_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case DELETE_FAMILY_MEMBER_REQUEST:
      return {
        ...state,
        loading: true       
      }

    case DELETE_FAMILY_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        members: state.members.filter(member => member.id !== action.payload),
        member: ''
      }

    case DELETE_FAMILY_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return { ...state };
  }
}