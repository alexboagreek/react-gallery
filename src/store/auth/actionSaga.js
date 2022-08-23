import axios from 'axios';
import {API_URL} from './../../api/const';
import {authSlice} from './authSlice';
import {select, call, put, takeEvery} from 'redux-saga/effects';

function* fetchAuth() {
  const token = yield select(state => state.tokenReducer.token);
  if (!token) return;

  try {
    const request = yield call(axios, `${API_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    yield put(authSlice.actions.authRequestSuccess(request.data));
  } catch (error) {
    yield put(authSlice.actions.authRequestError(error));
  }
}

export function* watchAuth() {
  yield takeEvery(authSlice.actions.authRequest, fetchAuth);
}
