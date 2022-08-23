import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import tokenReducer from './token/tokenSlice';
import authReducer from './auth/authSlice';
import photosReducer from './photos/photosSlice';
import photoReducer from './photo/photoSlice';
import likeReducer from './like/likeSlice';


const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    authReducer,
    photosReducer,
    photoReducer,
    likeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);
