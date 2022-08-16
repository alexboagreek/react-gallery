import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL, ACCESS_KEY} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
    'photos/fetch',
    (newPage, {getState}) => {
        let countPages = getState().photos.countPages;
        const prevPhotos = getState().photos.photos;
    

    return axios(
        `${API_URL}/photos?${countPages > 1 ? `page=${countPages}` : ``}`,
        {
          headers: {
            Authorization: `Access-KEY ${ACCESS_KEY}`,
          },
        })
        .then(({data: newPhotos}) => {
            const photos = [...prevPhotos, ...newPhotos];
            countPages++;
            return {photos, countPages};
        })
        .catch((error) => ({error: error.toString()}));
    }
);