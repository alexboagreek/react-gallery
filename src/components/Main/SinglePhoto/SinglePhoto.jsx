import style from './SinglePhoto.module.css';
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import {API_URL, CLIENT_ID} from '../../../api/const';
import {ReactComponent as LikeIcon} from './img/like.svg';
import {useSelector, useDispatch} from 'react-redux';
import {clearPhotos} from '../../../store/photos/photosSlice';

export const SinglePhoto = () => {
  const [photo, setPhoto] = useState(null);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  const {id} = useParams();
  const setLike = () => {
    axios({
      method: 'post',
      url: `${API_URL}/photos/${photo.id}/like`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        client_id: CLIENT_ID,
      },
    })
      .then(({data}) => {
        setPhoto(data.photo);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteLike = () => {
    axios({
      method: 'delete',
      url: `${API_URL}/photos/${photo.id}/like`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        client_id: CLIENT_ID,
      },
    })
      .then(({data}) => {
        setPhoto(data.photo);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios.get(`${API_URL}/photos/${id}`, {
      params: {
        client_id: CLIENT_ID,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({data}) => {
        setPhoto(data);
        dispatch(clearPhotos());
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);


  return (
    <div className={style.body}>
      {photo && (
        <>
          <img src={photo.urls.regular} className={style.image} />
          <div className={style.footer}>
            <div className={token ? style.likesBody : style.likesBodyDefault}
              onClick={token ? photo['liked_by_user'] ?
                deleteLike : setLike : () => {}}>
              <LikeIcon className={token ? photo['liked_by_user'] ?
              style.redHeart : style.heart : style.heart} />
              <span className={style.likes}>{photo.likes}</span>
            </div>
            <Link to='/'>На главную</Link>
          </div>
        </>
      )}
    </div>
  );
};
