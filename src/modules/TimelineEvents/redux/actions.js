import { getDisplayDate } from "@material-ui/pickers/_helpers/text-field-helper";
import axios from "axios";
import { DELETE_QUESTION_REQUEST } from "../../FrequentlyAskedQuestions/redux/actionTypes";
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

// export const getAllQuestions = () => {
//   return dispatch => {
//     dispatch(getAllQuestionsRequest)
//     axios.get('url')
//       .then(res => {
//         const questions = res.data
//         dispatch(getAllQuestionsSuccess(questions))
//       })
//       .catch(err => {
//         const errMsg = err.message
//         dispatch(getAllQuestionsFailure(errMsg))
//       })
//   }
// }

export const deleteTimelineEvent = () => {
  return dispatch => {
    dispatch(deleteTimelineEventRequest)
    axios.get('url')
      .then(res => {
        const timelineEvent = res.data
        dispatch(deleteTimelineEventSuccess(timelineEvent.id))
      })
      .catch(err => {
        const errMsg = err.message
        dispatch(deleteTimelineEventFailure(errMsg))
      })
  }
}

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

// only the admin can delete timeline events 
export const deleteTimelineEventRequest = () => {
  return {
    type: DELETE_QUESTION_REQUEST
  }
}

export const deleteTimelineEventSuccess = id => {
  return {
    type: DELETE_TIMELINE_EVENT_SUCCESS,
    payload: id
  }
}

export const deleteTimelineEventFailure = error => {
  return {
    type: DELETE_TIMELINE_EVENT_FAILURE,
    payload: error
  }
}