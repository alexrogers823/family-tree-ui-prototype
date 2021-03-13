import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_TIMELINE_EVENT_BY_ID,
  CREATE_TIMELINE_EVENT
} from "./actionTypes";

import { timelineData } from '../../../dummyData';

const INIT_STATE = {
  loading: false,
  timelineEvents: [],
  timelineEvent: {},
  error: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_EVENTS:
      return { 
        ...state, 
        timelineEvents: [ ...timelineData ], 
      }

    case GET_ALL_EVENTS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        timelineEvents: action.payload
      }

    case GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_TIMELINE_EVENT_BY_ID:
      return {
        ...state,
        timelineEvent: timelineData.find(ev => ev.id === action.payload)
      }

    case CREATE_TIMELINE_EVENT:
      return {
        ...state,
        timelineEvents: [
          ...timelineData,
          action.payload
        ]
      }

    default:
      return { ...state };
  }
};