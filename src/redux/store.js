import { createStore } from 'redux';
import reducer from './reducers';
import { timelineData, faqData } from '../dummyData';
import { familyMembers } from '../memberData';

const initialState = {
  members: [ ...familyMembers ],
  questions: [ ...faqData ], 
  timelineEvents: [ ...timelineData ]
};

const store = createStore(reducer);
// store.dispatch({ type: "ADD QUESTION" });

export default store;