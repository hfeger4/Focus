import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
} from '../actions/error_actions';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';

const nullPhoto = Object.freeze({
  0: {
    title: "",
    body: "",
    image_url: "",
    user_id: null,
    album_id: null
  }
});

const PhotoReducer = (state = nullPhoto, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const photo = {[action.photo.id]: action.id};
      return Object.assign({}, state, photo);
    case REMOVE_PHOTO:
      const newState = Object.assign({},state);
      delete newState[action.photo.id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullPhoto,
        {errors}
      );
    default:
      return state;
  }
};

export default PhotoReducer;
