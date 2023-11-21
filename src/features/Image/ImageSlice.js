import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    imageUrl: null,
  },
  reducers: {
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setImageUrl } = imageSlice.actions;

export const selectImageUrl = (state) => state.image.imageUrl;

export default imageSlice.reducer;

