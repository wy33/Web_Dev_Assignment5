import { configureStore } from '@reduxjs/toolkit';

import animeQuoteReducer from '../features/AnimeQuote/AnimeQuoteSlice';
import weatherReducer from '../features/Weather/WeatherSlice';

export default configureStore({
    reducer: {
        // animeQuote: animeQuoteSlice.reducer
        animeQuote: animeQuoteReducer,
        weather: weatherReducer
    },
})