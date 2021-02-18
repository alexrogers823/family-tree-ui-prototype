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
      return { 
        ...state,
        questions: [ ...faqData, {id: 999, question: 'test question', answer: 'test answer'} ],
      }

    default:
      return { ...state }
  }
};