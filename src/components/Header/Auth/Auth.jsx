import React from 'react';
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {PropTypes} from 'prop-types';
import {useAuth} from '../../../hooks/useAuth';


export const Auth = () => {
  const [auth] = useAuth();
  return (
    <>
      {auth.username ? (
        <div className={style.profile_info}>
          <img src={auth['profile_image'].small}/>
          <span>{auth.username}</span>
        </div>
      ) : (
        <a href={urlAuth} className={style.button}>
          <AuthIcon className={style.icon}/>
        </a>
      )}
    </>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
