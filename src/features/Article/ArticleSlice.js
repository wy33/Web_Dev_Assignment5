import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        empty: true,
        title: '',
        content_urls: '',
        thumbnail: '',
        extract: ''
    },
    reducers: {
        setArticle: (state, action) => {
            state.empty = false;
            state.title = action.payload.title;
            state.content_urls = action.payload.content_urls;
            state.thumbnail = action.payload.thumbnail;
            state.extract = action.payload.extract;
        }
    }
});

export const { setArticle } = articleSlice.actions;

export default articleSlice.reducer;