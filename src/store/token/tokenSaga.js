import axios from 'axios';
import {CLIENT_ID, SECRET_KEY, REDIRECT_URI} from '../../api/const';
import {tokenSlice} from './tokenSlice';
import {call, put, takeEvery} from 'redux-saga/effects';
import {code} from '../../api/token';

function* fetchToken() {
  if (!code) return;
  try {
    const request = yield call(axios, `https://unsplash.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${SECRET_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&grant_type=authorization_code`, {
      method: 'POST',
    });

    yield put(tokenSlice.actions.tokenRequestSuccess(
      request.data['access_token']));
  } catch (error) {
    yield put(tokenSlice.actions.tokenRequestError(error));
  }
}

export function* watchToken() {
  yield takeEvery(tokenSlice.actions.tokenRequest, fetchToken);
}
