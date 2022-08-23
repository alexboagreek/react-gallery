import React, {useEffect} from 'react';
import style from './PhotoPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {photoSlice} from './../../store/photo/photoSlice';
import {useParams} from 'react-router-dom';
import {Layout} from './../Main/Layout/Layout';
import formatDate from './../../utils/formatDate';
import {ReactComponent as LikeIcon} from './img/like.svg';
import {likeSlice} from './../../store/like/likeSlice';

export const PhotoPage = () => {
  const photo = useSelector(state => state.photoReducer.data);
  const {id} = useParams();
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  let likes = photo.likes;

  useEffect(() => {
    dispatch(photoSlice.actions.photoRequest(id));
  }, [id]);

  const handleLike = () => {
    if (!token) return;
    dispatch(likeSlice.actions.likeRequest(id));

    const btn = document.querySelector(`.${style.like}`);
    const likesCount = document.querySelector(`.${style.likes}`);

    btn.classList.toggle(`${style.like_active}`);

    if (btn.classList.contains(`${style.like_active}`)) {
      likes++;
    } else {
      likes--;
    }
    likesCount.textContent = likes;
  };


  return (
    <Layout>
      <div className={style.container}>
        {photo.urls ? (
          <>
            <img src={photo.urls.full} />
            <a href={photo.links.html}>Author: {photo.user.username}</a>
            <br />
            <time dateTime={photo['created_at']}>
              {formatDate(photo['created_at'])}
            </time>
            {photo['liked_by_user'] ? (
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span className={style.likes}>{likes}</span>
                <button className={style.like + ' ' + style['like_active']}
                  onClick={handleLike}>
                  <LikeIcon fill='red'/>
                </button>
              </div>
            ) : (
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span className={style.likes}>{likes}</span>
                <button className={style.like}
                  onClick={handleLike}>
                  <LikeIcon fill='grey'/>
                </button>
              </div>
            )}
          </>
        ) : (
          <h2>Загрузка фотографии</h2>
        )}
      </div>
    </Layout>
  );
};
