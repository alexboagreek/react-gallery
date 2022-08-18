
import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_ERROR
} from './actionAuth';

const initialState = {
  loading: false,
  data: {},
  error: '',
  status: 'none',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        status: 'logined',
      };
    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: '',
        status: 'error',
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        data: {},
        status: 'none',
      };
    default:
      return state;
  }
};
