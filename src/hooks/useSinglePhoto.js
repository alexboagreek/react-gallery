import axios from 'axios';
import {useEffect} from 'react';
import {API_URL, ACCESS_KEY} from '../api/const';
import PropTypes from 'prop-types';

export const useSinglePhoto = ({id}) => {
    useEffect(() => {
        axios.get(`${API_URL}/photos/${id}`, {
            params: {
                access_key: ACCESS_KEY,
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

