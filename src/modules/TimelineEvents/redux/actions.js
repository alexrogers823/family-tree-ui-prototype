import { 
  GET_ALL_EVENTS,
  POST_NEW_EVENT 
} from "./actionTypes";

export const getAllEvents = () => {
  return {
    type: GET_ALL_EVENTS
  }
};

export const postNewEvent = timelineEvent => {
  console.log('event emitted', timelineEvent);
  return {
    type: POST_NEW_EVENT
  }
};