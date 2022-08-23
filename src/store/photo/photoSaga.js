import axios from 'axios';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {CLIENT_ID, API_URL} from '../../api/const';
import {photoSlice} from './photoSlice';

function* fetchPhoto(id) {
  const token = yield select(state => state.tokenReducer.token);
  try {
    const request = token ? yield call(axios,
      `${API_URL}/photos/${id.payload}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }) : yield call(axios,
        `${API_URL}/photos/${id.payload}?client_id=${CLIENT_ID}`);

    yield put(photoSlice.actions.photoRequestSuccess(request.data));
  } catch (error) {
    yield put(photoSlice.actions.photosRequestError(error));
  }
}

export function* watchPhoto() {
  yield takeEvery(photoSlice.actions.photoRequest, fetchPhoto);
}
