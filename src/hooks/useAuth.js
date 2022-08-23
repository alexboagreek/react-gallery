import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {authSlice} from '../store/auth/authSlice';


export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.authReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSlice.actions.authRequest());
  }, [token]);

  return [auth, loading];
};

