import {
  GET_ALL_ARTIFACTS,
  GET_ARTIFACT_BY_ID,
} from './actionTypes';

export const getAllArtifacts = () => {
  return {
    type: GET_ALL_ARTIFACTS
  }
}

export const getArtifactById = (id = 0) => {
  return {
    type: GET_ARTIFACT_BY_ID,
    payload: id
  }
}