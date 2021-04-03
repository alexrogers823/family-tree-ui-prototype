import axios from 'axios';

import { 
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_REQUEST,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_FAILURE, 
  POST_NEW_QUESTION,
  POST_NEW_QUESTION_REQUEST,
  POST_NEW_QUESTION_SUCCESS,
  POST_NEW_QUESTION_FAILURE,
  UPDATE_QUESTION,
  DELETE_QUESTION 
} from "./actionTypes";

export const getAllQuestions = () => {
  return {
    type: GET_ALL_QUESTIONS
  }
};

// export const getAllQuestions = () => {
//   return dispatch => {
//     dispatch(getAllQuestionsRequest)
//     axios.get('url')
//       .then(res => {
//         const questions = res.data
//         dispatch(getAllQuestionsSuccess(questions))
//       })
//       .catch(err => {
//         const errMsg = err.message
//         dispatch(getAllQuestionsFailure(errMsg))
//       })
//   }
// }

export const getAllQuestionsRequest = () => {
  return {
    type: GET_ALL_QUESTIONS_REQUEST
  }
};
export const getAllQuestionsSuccess = questions => {
  return {
    type: GET_ALL_QUESTIONS_SUCCESS,
    payload: questions
  }
};
export const getAllQuestionsFailure = error => {
  return {
    type: GET_ALL_QUESTIONS_FAILURE,
    payload: error
  }
};

export const postNewQuestion = () => {
  return {
    type: POST_NEW_QUESTION
  }
};

export const postNewQuestionRequest = () => {
  return {
    type: POST_NEW_QUESTION_REQUEST
  }
};

export const postNewQuestionSuccess = question => {
  return {
    type: POST_NEW_QUESTION_SUCCESS,
    payload: question
  }
};

export const postNewQuestionFailure = error => {
  return {
    type: POST_NEW_QUESTION_FAILURE,
    payload: error
  }
};

export const updateQuestion = () => {
  return {
    type: UPDATE_QUESTION
  }
};

export const deleteQuestion = (id = 1) => {
  return {
    type: DELETE_QUESTION,
    payload: id
  }
};