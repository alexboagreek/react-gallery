import style from './List.module.css';
import Photo from './Photo';
import {useEffect, useRef} from 'react';
import {photosRequestAsync} from './../../../store/photos/actionPhotos';
import {useSelector, useDispatch} from 'react-redux';
import Masonry from 'react-masonry-css';

export const List = () => {
  const photos = useSelector(state => state.photos.photos);
  const token = useSelector(state => state.token.token);
  const countPages = useSelector(state => state.photos.countPages);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosRequestAsync());
  }, [token]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(photosRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  // const breakpointColumsObj = {
  //   default: 4,
  //   1100: 3,
  //   700: 2,
  //   500: 1
  // };

  return (
    <>
      <Masonry
        className={style.masonryGrid}
        columnClassName={style.masonryGridColumn}>
        {photos.map(elem => {
          const id = `${elem.id}${countPages}`;
          return <Photo key={id} photoData={elem} />;
        })}
      </Masonry>
      <span ref={endList} />
    </>
  );
};
