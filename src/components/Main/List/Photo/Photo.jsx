import style from './Photo.module.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Photo = ({photoData}) => {
  const {
    id,
    urls,
    alt_description: alt,
  } = photoData;

  return (
    <>
      <div className={style.photo} id={id}>
        <Link to={`photos/${id}`}>
          <img src={urls.small} alt={alt} className={style.image} />
        </Link>
      </div>
    </>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
