import * as APIUtil from '../util/album_api_util';
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

export const fetchAlbums = data => dispatch => (
  APIUtil.fetchAlbums(data).then(
    (albums => dispatch(receiveAlbums(albums))),
    error => dispatch(receiveErrors(error.responseJSON))
));

export const fetchAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(
    (album => dispatch(receiveAlbum(album))),
    error => dispatch(receiveErrors(error.responseJSON))
));

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(
    (new_album => dispatch(receiveAlbum(new_album))),
    error => dispatch(receiveErrors(error.responseJSON))
));

export const deleteAlbum = id => dispatch => (
  APIUtil.destroyAlbum(id).then(
    (album => dispatch(removeAlbum(album))),
    error => dispatch(receiveErrors(error.responseJSON))
));
