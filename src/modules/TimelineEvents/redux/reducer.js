import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_TIMELINE_EVENT_BY_ID,
  CREATE_TIMELINE_EVENT,
  CREATE_TIMELINE_EVENT_REQUEST,
  CREATE_TIMELINE_EVENT_SUCCESS,
  CREATE_TIMELINE_EVENT_FAILURE,
  DELETE_TIMELINE_EVENT,
  DELETE_TIMELINE_EVENT_REQUEST,
  DELETE_TIMELINE_EVENT_SUCCESS,
  DELETE_TIMELINE_EVENT_FAILURE
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

    case CREATE_TIMELINE_EVENT_REQUEST:
      return {
        ...state,
        loading: true
      }

    case CREATE_TIMELINE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        timelineEvents: state.timelineEvents.push(action.payload) // change this so that it doesn't push new event to the end (sorting reasons)
      }

    case CREATE_TIMELINE_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case DELETE_TIMELINE_EVENT_REQUEST:
      return {
        ...state,
        loading: true
      }

    case DELETE_TIMELINE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        timelineEvents: state.timelineEvents.filter(tEvent => tEvent.id !== action.payload)
      }

    case DELETE_TIMELINE_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return { ...state };
  }
};