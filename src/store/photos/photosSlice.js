import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  data: [],
  error: '',
  page: 1,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    photosRequestSuccess: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
      state.error = '';
    },
    photosRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    changePage: (state, action) => {
      state.page++;
    },
  }
});

export default photosSlice.reducer;
