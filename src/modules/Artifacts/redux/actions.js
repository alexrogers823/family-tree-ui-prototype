import {
  GET_ALL_ARTIFACTS,
  GET_ALL_ARTIFACTS_REQUEST,
  GET_ALL_ARTIFACTS_SUCCESS,
  GET_ALL_ARTIFACTS_FAILURE,
  GET_ARTIFACT_BY_ID,
} from './actionTypes';

export const getAllArtifacts = () => {
  return {
    type: GET_ALL_ARTIFACTS
  }
};

export const getAllArtifactsRequest = () => {
  return {
    type: GET_ALL_ARTIFACTS_REQUEST
  }
};

export const getAllArtifactsSuccess = artifacts => {
  return {
    type: GET_ALL_ARTIFACTS_SUCCESS,
    payload: artifacts
  }
};

export const getAllArtifactsFailure = error => {
  return {
    type: GET_ALL_ARTIFACTS,
    payload: error
  }
};

export const getArtifactById = (id = 0) => {
  return {
    type: GET_ARTIFACT_BY_ID,
    payload: id
  }
}