import axios from 'axios';
import {
  API_URL_TOKEN,
  CLIENT_ID,
  SECRET_KEY,
  REDIRECT_URI
} from '../../api/const';
import {updateToken, deleteToken} from './tokenReducer';

export const tokenRequestAsync = (codeApp) => (dispatch, getState) => {
  axios({
    method: 'post',
    url: API_URL_TOKEN,
    data: {
      client_id: CLIENT_ID,
      secret_key: SECRET_KEY,
      redirect_uri: REDIRECT_URI,
      code: codeApp,
      grant_type: 'authorization_code',
    },
  })
    .then(({data}) => {
      dispatch(updateToken(data.access_token));
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteToken());
    });
};
