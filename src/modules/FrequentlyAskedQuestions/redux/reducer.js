import {
  GET_ALL_QUESTIONS
} from "./actionTypes";

import { faqData } from '../../../dummyData';

const INIT_STATE = {
  questions: [ ...faqData ], 
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_QUESTIONS:
      return { ...state,
        questions: [ ...faqData ],
      }

    default:
      return { ...state }
  }
};