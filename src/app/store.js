import { configureStore } from '@reduxjs/toolkit';

import animeQuoteReducer from '../features/AnimeQuote/AnimeQuoteSlice';
import articleReducer from '../features/Article/ArticleSlice';

export default configureStore({
    reducer: {
        // animeQuote: animeQuoteSlice.reducer
        animeQuote: animeQuoteReducer,
        article: articleReducer
    },
})