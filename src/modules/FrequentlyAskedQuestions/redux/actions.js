import { 
  GET_ALL_QUESTIONS, 
  POST_NEW_QUESTION,
  DELETE_QUESTION 
} from "./actionTypes";

export const getAllQuestions = () => {
  return {
    type: GET_ALL_QUESTIONS
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