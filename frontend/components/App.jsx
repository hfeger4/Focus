import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotosIndexContainer from './photos/photos_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import HomepageContainer from './homepage/homepage_container';
import AlbumsIndexContainer from './albums/album_index_container';
import AlbumsShowContainer from './albums/albums_show_container';
import PhotoStreamContainer from './photos/photo_stream_container';
import AlbumFormContainer from './albums/album_form_container';
import AlbumStreamContainer from './albums/album_stream_container';
import CommentFormContainer from './comments/comment_form_container';

const App = () => (
  <div className="main-body">
    <header>
      <GreetingContainer />
    </header>

    <Route exact path="/" component={HomepageContainer} />
    <ProtectedRoute path="/albums/:id" component={AlbumsShowContainer} />
    <ProtectedRoute path="/users/:userId/photos" component={PhotoStreamContainer} />
    <ProtectedRoute path="/users/:userId/albums" component={AlbumStreamContainer} />
    <ProtectedRoute path="/photos/:photoId/comments" component={CommentFormContainer} />
    <ProtectedRoute path="/upload" component={PhotoUploadContainer} />
    <ProtectedRoute path="/photos/:id" component={PhotoShowContainer} />
    <ProtectedRoute path="/photos" component={PhotosIndexContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
