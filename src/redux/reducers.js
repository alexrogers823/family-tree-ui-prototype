import { combineReducers } from 'redux';

// Reducers 
import faq from '../modules/FrequentlyAskedQuestions/redux/reducer'
import members from '../modules/Members/redux/reducer';
import timelineEvents from '../modules/TimelineEvents/redux/reducer';

const reducersModules = {
  ...faq,
  ...members,
  ...timelineEvents,
};

const reducers = combineReducers(reducersModules);

export default reducers;

// function reducer(state = initialState, action) {
//   // console.log(action);
//   switch(action.type) {
//     case "ADD QUESTION":
//       return {
//         questions: [
//           ...state.questions,
//           {
//             id: 1,
//             question: 'another test question',
//             answer: 'another test answer'
//           }
//         ]
//       };
//     default:
//       return state;
//   }
// }