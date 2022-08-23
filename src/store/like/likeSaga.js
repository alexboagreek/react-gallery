import axios from 'axios';
import {select, takeEvery, call, put} from 'redux-saga/effects';
import {API_URL} from './../../api/const';
import {likeSlice} from './likeSlice';

function* fetchLike(id) {
  const token = yield select(state => state.tokenReducer.token);
  const like = yield select(state => state.photoReducer.data['like_by_user']);
  try {
    const request = like ? yield call(axios,
      `${API_URL}/photos/${id.payload}/like`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }) : yield call(axios, `${API_URL}/photos/${id.payload}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    yield put(likeSlice.actions.likeRequestSuccess(request.data));
  } catch (error) {
    yield put(likeSlice.actions.likeRequestError(error));
  }
}


export function* watchLike() {
  yield takeEvery(likeSlice.actions.likeRequest, fetchLike);
}
