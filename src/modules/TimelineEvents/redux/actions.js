import { 
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_TIMELINE_EVENT_BY_ID,
  CREATE_TIMELINE_EVENT,
  CREATE_TIMELINE_EVENT_REQUEST,
  CREATE_TIMELINE_EVENT_SUCCESS,
  CREATE_TIMELINE_EVENT_FAILURE 
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
  return {
    type: CREATE_TIMELINE_EVENT,
    payload: timelineEvent
  }
}

export const createTimelineEventRequest = () => {
  return {
    type: CREATE_TIMELINE_EVENT_REQUEST
  }
}

export const createTimelineEventSuccess = timelineEvent => {
  return {
    type: CREATE_TIMELINE_EVENT_SUCCESS,
    payload: timelineEvent
  }
}

export const createTimelineEventFailure = error => {
  return {
    type: CREATE_TIMELINE_EVENT_FAILURE,
    payload: error
  }
}