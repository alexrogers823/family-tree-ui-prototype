import {
  GET_ALL_PHOTOS,
  GET_PHOTO_BY_ID,
  UPLOAD_PHOTO
} from './actionTypes';

const INIT_STATE = {
  photos: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PHOTOS:
      return {
        ...state,
        photos: action.payload
      }

    case GET_PHOTO_BY_ID:
      return {
        ...state,
        photos: state.photos.find(photo => photo[action.payload])
      }

    case UPLOAD_PHOTO:
      return {
        ...state
      }

    default:
      return { ...state }
  }
}