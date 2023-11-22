import { createSlice } from '@reduxjs/toolkit';

export const animeQuoteSlice = createSlice({
    name: 'animeQuote',
    initialState: {
        empty: true,
        anime: '',
        character: '',
        quote: ''
    },
    reducers: {
        setQuote: (state, action) => {
            state.anime = action.payload.anime;
            state.character = action.payload.character;
            state.quote = action.payload.quote;
        },
    }
});

export const { setQuote } = animeQuoteSlice.actions;

export default animeQuoteSlice.reducer;