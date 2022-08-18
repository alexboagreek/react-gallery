import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer, tokenMiddleware} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import {codeReducer} from './codeReducer';
import thunk from 'redux-thunk';
import photosSlice from './photos/photosSlice';

export const store = configureStore({
  reducer: {
    code: codeReducer,
    token: tokenReducer,
    auth: authReducer,
    photos: photosSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, thunk),
});
