import {all} from 'redux-saga/effects';
import {watchAuth} from './auth/authSaga';
import {watchPhotos} from './photos/photosSaga';
import {watchToken} from './token/tokenSaga';
import {watchPhoto} from './photo/photoSaga';
import {watchLike} from './like/likeSaga';

export default function* rootSaga() {
  yield all([
    watchToken(),
    watchAuth(),
    watchPhotos(),
    watchPhoto(),
    watchLike(),
  ]);
}
