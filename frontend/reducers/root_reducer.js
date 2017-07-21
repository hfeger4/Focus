import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer
});

export default rootReducer;
