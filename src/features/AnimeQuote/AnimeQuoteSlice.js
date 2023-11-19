import { createSlice } from '@reduxjs/toolkit';

export const animeQuoteSlice = createSlice({
    name: 'animeQuote',
    initialState: {
        anime: '',
        character: '',
        quote: ''
    },
    reducers: {
        // setAnime: (state, action.payload) => {
        //     state.anime = 
        // },
        // setCharacter: (state) => {

        // },
        // setQuote: (state) => {

        // },
        setQuote: (state, action) => {
            // function setQuote(json) {
                // state.anime = json.anime;
                // state.character = json.character;
                // state.quote = json.quote;
            // }

            // const quoteEndpoint = 'https://animechan.xyz/api/random';

            // const json = fetch(quoteEndpoint)
			//     .then(response => response.json());
			    // .then(json => setQuote(json))
			    // .catch(error => console.error(error));
            
            // console.log(json);

            state.anime = action.payload.anime;
            state.character = action.payload.character;
            state.quote = action.payload.quote;
        }
    }
});

export const { setQuote } = animeQuoteSlice.actions;

// export const selectAnimeQuote = (state) => state.AnimeQuote.anime;

export default animeQuoteSlice.reducer;