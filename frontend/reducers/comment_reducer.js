import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
} from '../actions/error_actions';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const nullComment = Object.freeze({
  0: {
    body: "",
    user_id: null,
    photo_id: null
  }
});

const CommentReducer = (state = nullComment, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const comment = {[action.comment.id]: action.comment};
      return Object.assign({}, state, comment);
    case REMOVE_COMMENT:
      const newState = Object.assign({},state);
      delete newState[action.comment.id];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state,
        {errors}
      );
    default:
      return state;
  }
};

export default CommentReducer;
