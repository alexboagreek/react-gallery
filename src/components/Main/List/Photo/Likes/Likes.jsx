import style from './Likes.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as HeartIcon} from './img/heart.svg';

export const Likes = ({likes}) => (
  <>
    <HeartIcon className={style.heart} />
    <div className={style.likes}>
      <span>{likes}</span>
    </div>
  </>
);

Likes.propTypes = {
  likes: PropTypes.number,
};


