import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  id: '',
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    photoRequest: (state) => {
      state.data = {};
      state.error = '';
    },
    photoRequestSuccess: (state, action) => {
      state.data = action.payload;
      state.error = '';
    },
    photoRequestError: (state, action) => {
      state.data = {};
      state.error = action.payload.error;
    }
  }
});

export default photoSlice.reducer;
