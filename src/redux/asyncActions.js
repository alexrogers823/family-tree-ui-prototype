import { createStore, applyMiddleware } from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import axios from 'axios';

const initialState = {
    loading: false,
    timelineEvents: [],
    error: ''
}

const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST'
const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE'

const fetchEventsRequest = () => {
    return {
        type: FETCH_EVENTS_REQUEST
    }
}

const fetchEventsSuccess = timelineEvents => {
    return {
        type: FETCH_EVENTS_SUCCESS,
        payload: timelineEvents
    }
}

const fetchEventsFailure = error => {
    return {
        type: FETCH_EVENTS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENTS_REQUEST:
            return {
                ...state,
                loading: true 
            }
        case FETCH_EVENTS_SUCCESS:
            return {
                loading: false,
                timelineEvents: action.payload,
                error: ''
            }
        case FETCH_EVENTS_FAILURE:
            return {
                loading: false,
                timelineEvents: [],
                error: action.payload
            }
    }
}

const fetchEvents = () => {
    return function(dispatch) {
        dispatch(fetchEventsRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const timelineEvents = res.data.map(ev => ev.id)
                dispatch(fetchEventsSuccess(timelineEvents))
            })
            .catch(err => {
                dispatch(fetchEventsFailure(err.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState())})
store.dispatch(fetchEvents())