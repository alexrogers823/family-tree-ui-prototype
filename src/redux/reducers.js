import { combineReducers } from 'redux';

// Reducers 
import faqReducer from '../modules/FrequentlyAskedQuestions/redux/reducer'
import membersReducer from '../modules/Members/redux/reducer';
import timelineEventsReducer from '../modules/TimelineEvents/redux/reducer';
import artifactsReducer from '../modules/Artifacts/redux/reducer';
import usersReducer from '../modules/UserSettings/redux/reducer';
import photosReducer from '../modules/Gallery/redux/reducer';
import othersReducer from './internal/reducer';

const reducers = combineReducers({
  faqReducer,
  timelineEventsReducer,
  membersReducer,
  artifactsReducer,
  usersReducer,
  photosReducer,
  othersReducer
});

export default reducers;