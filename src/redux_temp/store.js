import { createStore } from 'redux';
import { timelineData, faqData } from '../dummyData';
import { familyMembers } from '../memberData';

const initialState = {
  members: [ ...familyMembers ],
  questions: [ ...faqData ], 
  timelineEvents: [ ...timelineData ]
};

function reducer(state = initialState, action) {
  // console.log(action);
  switch(action.type) {
    case "ADD QUESTION":
      return {
        questions: [
          ...state.questions,
          {
            id: 1,
            question: 'another test question',
            answer: 'another test answer'
          }
        ]
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// store.dispatch({ type: "ADD QUESTION" });

export default store;

