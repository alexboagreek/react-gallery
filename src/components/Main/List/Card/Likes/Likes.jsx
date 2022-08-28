import React from 'react';
import {PropTypes} from 'prop-types';

export const Likes = ({likes}) => (
  <p>{likes}</p>
);

Likes.propTypes = {
  likes: PropTypes.number,
};
