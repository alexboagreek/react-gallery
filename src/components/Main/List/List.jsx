import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {photosSlice} from '../../../store/photos/photosSlice';
import style from './List.module.css';
import {Card} from './Card/Card';
import {ImageList} from '@mui/material';
import {Outlet} from 'react-router-dom';

export const List = props => {
  const photos = useSelector(state => state.photosReducer.data);
  const dispatch = useDispatch();
  const endList = useRef(null);
  const loading = useSelector(state => state.photosReducer.loading);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(photosSlice.actions.photosRequest());
      }
    }, {
      rootMargin: '100px',
    });

    if (endList.current && !loading) {
      observer.observe(endList.current);
    }
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <ImageList variant='masonry' cols={5} gap={10}>
      {photos.length > 0 ? (
        photos.map((item) => (
          <li key={item.id}>
            <Card data={item}/>
          </li>
        ))
        ) : (
          <p>Loading photo</p>
        )}
      <li ref={endList} className={style.end}/>
      <Outlet/>
    </ImageList>
  );
};
