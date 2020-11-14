import { combineReducers } from 'redux';

import ThemeReducer from './ThemeReducer';
import MusicReducer from './MusicReducer';

export const rootReducer = combineReducers({
  ThemeReducer: ThemeReducer,
  MusicReducer: MusicReducer
});