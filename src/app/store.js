import { configureStore } from '@reduxjs/toolkit';

import animeQuoteReducer from '../features/AnimeQuote/AnimeQuoteSlice';

export default configureStore({
    reducer: {
        // animeQuote: animeQuoteSlice.reducer
        animeQuote: animeQuoteReducer
    },
})