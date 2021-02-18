import { createStore, combineReducers } from 'redux';
// import reducer from './reducers';

import { faqData, timelineData, artifactData } from '../dummyData';
import { familyMembers } from '../memberData';


export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";

function getAllQuestions() {
    return {
        type: GET_ALL_QUESTIONS,
        info: "Returns all questions"
    }
}

function getAllEvents() {
    return {
        type: GET_ALL_EVENTS,
        info: "Returns all timeline events"
    }
}

const initialPhotoState = {
    photos: new Array(20).fill('').map((element, i) => `photo ${i+1}`),
    // questions: [ ...faqData ],
    // timelineEvents: [ ...timelineData ]
};

const initialArtifactState = {
    artifacts: [ ...artifactData ],
}

const initialMemberState = {
    members: [ ...familyMembers ],
}

const faqReducer = (state = initialArtifactState, action) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            return { 
                ...state,
                questions: [ ...faqData ],
            }

        default:
            return state
    }
}

const timelineReducer = (state = initialMemberState, action) => {
    switch (action.type) {
        case GET_ALL_EVENTS:
            return { ...state, 
                timelineEvents: [ ...timelineData ], 
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    faq: faqReducer,
    timeline: timelineReducer
});

const store = createStore(rootReducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(getAllQuestions())
store.dispatch(getAllEvents())
unsubscribe();
export default store;