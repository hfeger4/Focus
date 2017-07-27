import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
} from '../actions/error_actions';

import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const nullTag = Object.freeze({
  0: {
    name: "",
    photo_id: null
  }
});

const CommentReducer = (state = nullTag, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      const tag = {[action.tag.id]: action.tag};
      return Object.assign({}, state, tag);
    case REMOVE_TAG:
      const newState = Object.assign({},state);
      delete newState[action.tag.id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullTag,
        {errors}
      );
    default:
      return state;
  }
};

export default CommentReducer;
