import * as APIUtil from '../util/tag_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const fetchTags = photoId => dispatch => (
  APIUtil.fetchTags(photoId).then(
    (tags => dispatch(receiveTags(tags))),
    error => dispatch(receiveErrors(error.responseJSON))
));

export const createTag = tag => dispatch => (
  APIUtil.createTag(tag).then(
    (newTag => dispatch(receiveTag(newTag)))
));

export const deleteTag = id => dispatch => (
  APIUtil.destroyTag(id).then(
    (tag => dispatch(removeTag(tag))),
    error => dispatch(receiveErrors(error.responseJSON))
));
