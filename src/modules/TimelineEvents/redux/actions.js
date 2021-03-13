import { 
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_TIMELINE_EVENT_BY_ID,
  CREATE_TIMELINE_EVENT 
} from "./actionTypes";

export const getAllEvents = () => {
  return {
    type: GET_ALL_EVENTS
  }
};

export const getAllEventsRequest = () => {
  return {
    type: GET_ALL_EVENTS_REQUEST
  }
};

export const getAllEventsSuccess = timelineEvents => {
  return {
    type: GET_ALL_EVENTS_SUCCESS,
    payload: timelineEvents
  }
};

export const getAllEventsFailure = error => {
  return {
    type: GET_ALL_EVENTS_FAILURE,
    payload: error
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