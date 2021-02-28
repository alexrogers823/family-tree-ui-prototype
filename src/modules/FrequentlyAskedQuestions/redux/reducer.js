import {
  GET_ALL_QUESTIONS,
  POST_NEW_QUESTION,
  DELETE_QUESTION
} from "./actionTypes";

import { faqData } from '../../../dummyData';

const INIT_STATE = {
  questions: [], 
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_QUESTIONS:
      return { 
        questions: [ ...faqData ]
      }

    case POST_NEW_QUESTION:
      return {
        ...state,
        questions: [ ...state.questions, {id: 999, question: 'test question', answer: 'test answer'} ],
      }

    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== action.payload)
      }

    default:
      return { ...state }
  }
};