import {createSlice} from '@reduxjs/toolkit';
import {photosRequestAsync} from './actionPhotos';

const initialState = {
  photos: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  countPages: 1,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    clearPhotos: (state) => {
      state.photos = [];
      state.countPages = 1;
    },
  },
  extraReducers: {
    [photosRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [photosRequestAsync.fulfilled.type]: (state, action) => {
      state.photos = action.payload.photos;
      state.countPages = action.payload.countPages;
      state.error = '';
      state.status = 'loaded';
      state.isLast = !action.payload.after;
    },
    [photosRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
  },
});

export const {clearPhotos} = photosSlice.actions;
export default photosSlice.reducer;
