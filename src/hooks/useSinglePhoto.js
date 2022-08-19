import axios from 'axios';
import {useEffect} from 'react';
import {API_URL, CLIENT_ID} from '../api/const';
import PropTypes from 'prop-types';

export const useSinglePhoto = ({id}) => {
  useEffect(() => {
    axios.get(`${API_URL}/photos/${id}`, {
      params: {
        client_id: CLIENT_ID,
      }
    })
      .then(({data}) => (data))
      .catch(error => {
        console.log(error);
      });
  });
};

useSinglePhoto.propTypes = {
  photoData: PropTypes.string,
};

