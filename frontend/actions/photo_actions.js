import * as APIUtil from '../util/photo_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchPhotos = data => dispatch => (
  APIUtil.fetchPhotos(data).then(
    (photos => dispatch(receivePhotos(photos))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then(
    (photo => dispatch(receivePhoto(photo))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then(
    (_photo => dispatch(receivePhoto(_photo))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const deletePhoto = id => dispatch => (
  APIUtil.destroyPhoto(id).then(
    (photo => dispatch(removePhoto(photo))),
    err => dispatch(receiveErrors(err.responseJSON))
));
