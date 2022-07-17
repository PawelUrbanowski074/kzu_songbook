import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    isPhotoVisible: true,
  },
  reducers: {
    togglePhoto: state => {
      state.isPhotoVisible = !state.isPhotoVisible;
    },
  },
});

export const {
  togglePhoto,
} = photoSlice.actions;

const selectPhotoState = state => state.photo;
export const selectIsPhotoVisible = state => selectPhotoState(state).isPhotoVisible;

export default photoSlice.reducer;