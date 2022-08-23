import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  like: true,
  likes: '',
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    likeRequest: (state) => {
      state.error = '';
    },
    likeRequestSuccess: (state, action) => {
      state.like = action.payload.photo['liked_by_user'];
      state.likes = action.payload.photo.likes;
      state.error = '';
    },
    likeRequestError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export default likeSlice.reducer;
