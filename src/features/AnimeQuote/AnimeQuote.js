import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { setQuote } from './AnimeQuoteSlice.js';

export default function AnimeQuote() {
	// animeQuote contains the fields [anime, character, quote]
	const animeQuote = useSelector((state) => state.animeQuote);
	const dispatch = useDispatch();

	// Fetch data from anime API and dispatch results to the store
	const getQuote = () => {
		const quoteEndpoint = 'https://animechan.xyz/api/random';

		fetch(quoteEndpoint)
			.then(response => response.json())
			.then(json => dispatch(setQuote(json)))
			.catch(error => console.error(error));
	};

	return (
		<div className="anime-quote">
			<button onClick={getQuote}>Get Anime Quote</button>
			<h2>{animeQuote.anime}</h2>
			<h3>{animeQuote.character}</h3>
			<p>{animeQuote.quote}</p>
		</div>
	);
}
