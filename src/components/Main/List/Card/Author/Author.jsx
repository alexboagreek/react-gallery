import React from 'react';
// import style from './Author.module.css';
import {PropTypes} from 'prop-types';

export const Author = ({user}) => (
  <h3>{user}</h3>
);

Author.propTypes = {
  user: PropTypes.string,
};
