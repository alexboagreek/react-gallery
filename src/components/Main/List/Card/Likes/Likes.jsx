import React from 'react';
import {ReactComponent as LikeIcon} from './img/like.svg';
import {PropTypes} from 'prop-types';
import style from './Likes.module.css';

export const Likes = ({likes}) => (
  <div className={style.box}>
    <LikeIcon width={20}/>
    <p>{likes}</p>
  </div>
);

Likes.propTypes = {
  likes: PropTypes.number,
};
