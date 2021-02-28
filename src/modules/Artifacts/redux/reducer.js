import {
  GET_ALL_ARTIFACTS,
  GET_ARTIFACT_BY_ID
} from './actionTypes';

import { artifactData } from '../../../dummyData';

const INIT_STATE = {
  artifacts: [],
  artfact: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ARTIFACTS:
      return {
        ...state,
        artifacts: [ ...artifactData ]
      }

    case GET_ARTIFACT_BY_ID:
      return {
        ...state,
        artifact: artifacts.find(doc => doc.id === action.payload)
      }

    default:
      return { ...state }
  }
};