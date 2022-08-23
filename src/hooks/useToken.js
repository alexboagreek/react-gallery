import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {tokenRequestAsync} from '../store/token/tokenSaga';

export const useToken = () => {
  const code = useSelector(state => state.code.code);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenRequestAsync(code));
  }, [code]);
};
