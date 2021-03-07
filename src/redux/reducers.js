import { combineReducers } from 'redux';

// Reducers 
import faqReducer from '../modules/FrequentlyAskedQuestions/redux/reducer'
import membersReducer from '../modules/Members/redux/reducer';
import timelineEventsReducer from '../modules/TimelineEvents/redux/reducer';
import artifactsReducer from '../modules/Artifacts/redux/reducer';
import usersReducer from '../modules/UserSettings/redux/reducer';
import photos from '../modules/Gallery/redux/reducer';

const reducersModules = {
  // ...faq,
  // ...members,
  // ...timelineEvents,
  // ...artifacts,
  // ...photos
};

const reducers = combineReducers({
  faqReducer,
  timelineEventsReducer,
  membersReducer,
  artifactsReducer,
  usersReducer
});

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