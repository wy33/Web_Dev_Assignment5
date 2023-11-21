import { configureStore } from '@reduxjs/toolkit';

import animeQuoteReducer from '../features/AnimeQuote/AnimeQuoteSlice';
import articleReducer from '../features/Article/ArticleSlice';
import imageReducer from '../features/Image/ImageSlice';
import weatherReducer from '../features/Weather/WeatherSlice';

export default configureStore({
    reducer: {
        // animeQuote: animeQuoteSlice.reducer
        animeQuote: animeQuoteReducer,
        article: articleReducer,
        image: imageReducer,
        weather: weatherReducer
    },
})