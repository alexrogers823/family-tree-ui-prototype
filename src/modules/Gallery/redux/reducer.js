import {
  GET_ALL_PHOTOS
} from './actionTypes';

const INIT_STATE = {
  photos: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PHOTOS:
      return {
        ...state,
        photos: action.payload
      }
  }
}