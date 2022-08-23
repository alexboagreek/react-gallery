import axios from 'axios';
import {CLIENT_ID, REDIRECT_URI, SECRET_KEY} from './const';

const params = new URLSearchParams(location.search);
export const code = params.get('code');

export const setToken = (token) => {
  localStorage.setItem('Bearer', token);
};

export const getToken = () => {
  let token;
  axios.post(`https://unsplash.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${SECRET_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&grant_type=authorization_code`)
    .then(response => {
      token = response.data['access_token'];
      localStorage.setItem('Bearer', token);
    });
  setToken(token);

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};
