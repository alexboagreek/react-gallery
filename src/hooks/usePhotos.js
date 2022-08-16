import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {photosRequestAsync} from '../store/photos/actionPhotos';

export const usePosts = () => {
    const photos = useSelector(state => state.photos.photos);
    const token = useSelector(state => state.token.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;

        dispatch(photosRequestAsync());
    }, [token]);

    return [photos];
};