import {
  GET_ALL_EVENTS
} from "./actionTypes";

import { timelineData } from '../../../dummyData';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_EVENTS:
      return { ...state, 
        timelineEvents: [ ...timelineData ], 
      }

    default:
      return { ...state };
  }
};