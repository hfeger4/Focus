import * as APIUtil from '../util/photo_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});

export const fetchPhotos = data => dispatch => (
  APIUtil.fetchPhotos(data).then(
    (photos => dispatch(receivePhotos(photos))),
    error => dispatch(receiveErrors(error.responseJSON))
));

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then(
    (photo => dispatch(receivePhoto(photo))),
    error => dispatch(receiveErrors(error.responseJSON))
));

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then(
    (new_photo => dispatch(receivePhoto(new_photo))),
    error => dispatch(receiveErrors(error.responseJSON))
));

export const deletePhoto = id => dispatch => (
  APIUtil.destroyPhoto(id).then(
    (photo => dispatch(removePhoto(photo))),
    error => dispatch(receiveErrors(error.responseJSON))
));
