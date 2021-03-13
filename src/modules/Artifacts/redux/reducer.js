import {
  GET_ALL_ARTIFACTS,
  GET_ALL_ARTIFACTS_REQUEST,
  GET_ALL_ARTIFACTS_SUCCESS,
  GET_ALL_ARTIFACTS_FAILURE,
  GET_ARTIFACT_BY_ID
} from './actionTypes';

import { artifactData } from '../../../dummyData';
import { GET_ALL_QUESTIONS_FAILURE } from '../../FrequentlyAskedQuestions/redux/actionTypes';

const INIT_STATE = {
  loading: false,
  artifacts: [],
  artfact: {},
  error: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ARTIFACTS:
      return {
        ...state,
        artifacts: [ ...artifactData ]
      }

    case GET_ALL_ARTIFACTS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_ARTIFACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        artifacts: action.payload
      }

    case GET_ALL_ARTIFACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_ARTIFACT_BY_ID:
      return {
        ...state,
        artifact: artifactData.find(doc => doc.id === action.payload)
      }

    default:
      return { ...state }
  }
};