import { createStore } from 'redux';

const initialState = {
  id: 0,
  question: 'test question',
  answer: 'test answer'
};

function reducer(state = initialState, action) {
  // console.log(action);
  switch(action.type) {
    case "ADD QUESTION":
      return {
        question: 'another test question',
        answer: 'another test answer'
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: "ADD QUESTION" });

export default store;

