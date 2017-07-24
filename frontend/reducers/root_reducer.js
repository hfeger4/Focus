import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import AlbumReducer from './album_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  albums: AlbumReducer
});

export default rootReducer;
