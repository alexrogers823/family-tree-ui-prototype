import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_REQUEST,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_FAILURE,
  POST_NEW_QUESTION,
  POST_NEW_QUESTION_REQUEST,
  POST_NEW_QUESTION_SUCCESS,
  POST_NEW_QUESTION_FAILURE,
  DELETE_QUESTION,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  UPDATE_QUESTION
} from "./actionTypes";

import { faqData } from '../../../dummyData';

const INIT_STATE = {
  loading: false,
  questions: [],
  error: '' 
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ALL_QUESTIONS:
      return { 
        ...state,
        questions: [ ...faqData ]
      }

    case GET_ALL_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questions: action.payload,
        error: ''
      }

    case GET_ALL_QUESTIONS_FAILURE:
      return {
        loading: false,
        questions: [],
        error: action.payload
      }

    case POST_NEW_QUESTION:
      return {
        ...state,
        questions: [ ...state.questions, {id: 999, question: 'test question', answer: 'test answer'} ],
      }

    case POST_NEW_QUESTION_REQUEST:
      return {
        ...state,
        loading: true
      }

    case POST_NEW_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: state.questions.push(action.payload)
      }

    case POST_NEW_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case UPDATE_QUESTION:
      return {
        ...state,
        questions: [ ...state.questions, {id: 1, question: 'update question', answer: 'updated answer'}],
      }

    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== action.payload)
      }

    case DELETE_QUESTION_REQUEST:
      return {
        ...state,
        loading: true
      }

    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: state.questions.filter(question => question.id !== action.payload)
      }

    case DELETE_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return { ...state }
  }
};