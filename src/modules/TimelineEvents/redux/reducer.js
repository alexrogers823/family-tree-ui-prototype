import {
  GET_ALL_EVENTS,
  GET_TIMELINE_EVENT_BY_ID,
  CREATE_TIMELINE_EVENT
} from "./actionTypes";

import { timelineData } from '../../../dummyData';

const INIT_STATE = {
  timelineEvents: [],
  timelineEvent: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_EVENTS:
      return { ...state, 
        timelineEvents: [ ...timelineData ], 
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
          {
            id: 6,
            day: 6,
            month: 1,
            year: 2021,
            createdOn: null,
            createdByUserId: 17,
            timelineEvent: action.payload
          }
        ]
      }

    default:
      return { ...state };
  }
};