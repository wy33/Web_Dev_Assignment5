import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { setQuote, selectAnimeQuote } from './AnimeQuoteSlice';
import { setQuote } from './AnimeQuoteSlice';

// function AnimeQuoteData({ details }) {
// 	return (
// 		<div className="anime-quote-details">
// 			<h2>{details.anime}</h2>
// 			{/* <h3>{details.character}</h3>
// 			<p>{details.quote}</p> */}
// 		</div>
// 	);
// }

export default function AnimeQuote() {
	// const anime = useSelector((state) => state.animeQuote.anime);
	// const character = useSelector((state) => state.animeQuote.character);
	// const quote = useSelector((state) => state.AnimeQuote.quote);
	const animeQuote = useSelector((state) => state.animeQuote);
	// const animeQuote = useSelector(selectAnimeQuote);
	const dispatch = useDispatch();

	const getQuote = () => {
		const quoteEndpoint = 'https://animechan.xyz/api/random';

		fetch(quoteEndpoint)
			.then(response => response.json())
			.then(json => dispatch(setQuote(json)))
			.catch(error => console.error(error));
		
		// dispatch(setQuote)
		// return (
		// 	<div className="anime-quote-details">
		// 		<h2>{animeQuote}</h2>
		// 		{/* <h3>{details.character}</h3>
		// 		<p>{details.quote}</p> */}
		// 	</div>
		// );
	}

	// function handleGetQuoteClick() {

		// fetch(quoteEndpoint)
		// 	.then(response => response.json())
		// 	.then(json => setQuote(json))
		// 	.catch(error => console.error(error));

	// 	return (
	// 		<div className="anime-quote">
	// 			<h2>{details.anime}</h2>
	// 			<h3>{details.character}</h3>
	// 			<p>{details.quote}</p>
	// 		</div>
	// 	);
	// }

	return (
		<div className="anime-quote">
			{/* <button onClick={() => dispatch(getQuote())}>Get Anime Quote</button> */}
			<button onClick={getQuote}>Get Anime Quote</button>
			{/* <AnimeQuoteData details={animeQuote}/> */}
			<h2>{animeQuote.anime}</h2>
			<h3>{animeQuote.character}</h3>
			<p>{animeQuote.quote}</p>
		</div>
	);
}
