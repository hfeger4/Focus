import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
} from '../actions/error_actions';

import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM
} from '../actions/album_actions';

const nullAlbum = Object.freeze({
  0: {
    title: "",
    body: "",
    user_id: null,
  }
});

const AlbumReducer = (state = nullAlbum, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      const album = {[action.album.id]: action.album};
      return Object.assign({}, state, album);
    case REMOVE_ALBUM:
      const newState = Object.assign({},state);
      delete newState[action.album.id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullAlbum,
        {errors}
      );
    default:
      return state;
  }
};

export default AlbumReducer;
