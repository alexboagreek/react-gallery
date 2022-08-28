import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import {Author} from './Author/Author';
import {Date} from './Date/Date';
import {Likes} from './Likes/Likes';


export const Card = ({data}) => {
  const {
    urls,
    'created_at': date,
    likes,
    user,
    id,
  } = data;

  return (
    <Link id={id} to={`/photo/${id}`}>
      <img src={urls.small}/>
      <Author user={user.username}/>
      <Date date={date}/>
      <Likes likes={likes}/>
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
