import {
  GET_ALL_PHOTOS
} from './actionTypes';

export const getAllPhotos = photos => {
  return {
    type: GET_ALL_PHOTOS,
    payload: photos
  }
};