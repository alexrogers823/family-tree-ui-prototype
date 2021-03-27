import {
  GET_ALL_PHOTOS,
  GET_PHOTO_BY_ID,
  UPLOAD_PHOTO,
  DELETE_PHOTO
} from './actionTypes';

export const getAllPhotos = photos => {
  return {
    type: GET_ALL_PHOTOS,
    payload: photos
  }
};

export const getPhotoById = id => {
  return {
    type: GET_PHOTO_BY_ID,
    payload: id
  }
};

export const uploadPhoto = () => {
  return {
    type: UPLOAD_PHOTO
  }
};

export const deletePhoto = photo => {
  return {
    type: DELETE_PHOTO,
    payload: photo
  }
}