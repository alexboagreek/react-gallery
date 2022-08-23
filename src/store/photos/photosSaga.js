import axios from 'axios';
import {API_URL, CLIENT_ID} from '../../api/const';
import {call, put, takeEvery, select} from 'redux-saga/effects';
import {photosSlice} from './photosSlice';


function* fetchPhotos() {
  const token = yield select(state => state.tokenReducer.token);
  const page = yield select(state => state.photosReducer.page);

  try {
    const request = token ? yield call(axios,
      `${API_URL}/photos?page=${page}&per_page=30`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }) : yield call(axios,
        `${API_URL}/photos?page=${page}&per_page=30`, {
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`
          }
        });

    yield put(photosSlice.actions.photosRequestSuccess(request.data));
    yield put(photosSlice.actions.changePage());
  } catch (error) {
    yield put(photosSlice.actions.photosRequestError(error));
  }
}

export function* watchPhotos() {
  yield takeEvery(photosSlice.actions.photosRequest, fetchPhotos);
}
