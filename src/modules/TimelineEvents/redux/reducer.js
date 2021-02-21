import {
  GET_ALL_EVENTS,
  POST_NEW_EVENT
} from "./actionTypes";

import { timelineData } from '../../../dummyData';

const INIT_STATE = {
  timelineEvents: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_EVENTS:
      return { ...state, 
        timelineEvents: [ ...timelineData ], 
      }

    case POST_NEW_EVENT:
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
            timelineEvent: "Idiots breach the capitol"
          }
        ]
      }

    default:
      return { ...state };
  }
};