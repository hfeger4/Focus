import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import { fetchAlbums } from './actions/album_actions';
import { fetchUserPhotos } from './actions/photo_actions';
import { fetchUserAlbums } from './actions/album_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.login = login;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAlbums = fetchAlbums;
  window.fetchUserPhotos = fetchUserPhotos;
  window.fetchUserAlbums = fetchUserAlbums;
});
