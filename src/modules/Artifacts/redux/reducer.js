import {
  GET_ALL_ARTIFACTS
} from './actionTypes';

import { artifactData } from '../../../dummyData';

const INIT_STATE = {
  artifacts: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ARTIFACTS:
      return {
        ...state,
        artifacts: [ ...artifactData ]
      }

    default:
      return { ...state }
  }
};