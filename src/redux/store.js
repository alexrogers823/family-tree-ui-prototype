import { createStore } from 'redux';
import { faqData } from '../dummyData';

const initialState = {
  questions: [
    ...faqData
  ]
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

