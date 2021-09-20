import { combineReducers } from 'redux';

import ebookReducer from './ebook.reducer';
import renditionReducer from './rendition.reducer';

export const rootReducer = combineReducers({
  ebook: ebookReducer,
  rendition: renditionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
