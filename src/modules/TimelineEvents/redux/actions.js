import { 
  GET_ALL_EVENTS,
  GET_TIMELINE_EVENT_BY_ID,
  CREATE_TIMELINE_EVENT 
} from "./actionTypes";

export const getAllEvents = () => {
  return {
    type: GET_ALL_EVENTS
  }
};

export const getTimelineEventById = (id = 0) => {
  return {
    type: GET_TIMELINE_EVENT_BY_ID,
    payload: id
  }
}

export const createTimelineEvent = (timelineEvent = 'test') => {
  console.log('event emitted', timelineEvent);
  return {
    type: CREATE_TIMELINE_EVENT,
    payload: timelineEvent
  }
};