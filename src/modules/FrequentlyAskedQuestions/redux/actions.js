import { 
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_REQUEST,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_FAILURE, 
  POST_NEW_QUESTION,
  DELETE_QUESTION 
} from "./actionTypes";

export const getAllQuestions = () => {
  return {
    type: GET_ALL_QUESTIONS
  }
};

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

export const deleteQuestion = (id = 1) => {
  return {
    type: DELETE_QUESTION,
    payload: id
  }
}