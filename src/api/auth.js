import {
    API_URL_AUTH,
    ACCESS_KEY,
    REDIRECT_URI,
    SECRET_KEY,
    GRANT_TYPE
  } from './const';
  
  const searchParams = new URLSearchParams();
  

  searchParams.append('client_id', ACCESS_KEY);
  searchParams.append('redirect_uri', REDIRECT_URI);
  searchParams.append('grant_type', GRANT_TYPE);
  searchParams.append('client_secret', SECRET_KEY);

  export const urlAuth = `${API_URL_AUTH}${searchParams.toString()}`;