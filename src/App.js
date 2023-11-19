import { useReducer, useState } from "react";

import ArticleList from "./Articles.js";
import Weather from "./Weather.js";
import AnimeQuote from "./features/AnimeQuote/AnimeQuote.js";
import Image from "./Image.js"

export default function Gallery() {
	const [quote, setQuote] = useState({ anime: null, character: null, quote: null });
	const [article, setArticle] = useState({empty:true});
	const [, forceUpdate] = useReducer(x => x + 1, 0);
	const [imagedata, setImageData] = useState({ imageUrl: null });

	const quoteEndpoint = 'https://animechan.xyz/api/random';
	const articleEndpoint = "https://en.wikipedia.org/api/rest_v1/page/random/summary";
	const imageEndpoint = 'https://api.unsplash.com/photos/random?query=newyorkcity&client_id=0-afBKY6mwQSalPCH365npBnVfjKlYNL6bIwH9Zz8PY'

	// function handleGetQuoteClick() {
	// 	fetch(quoteEndpoint)
	// 		.then(response => response.json())
	// 		.then(json => setQuote(json))
	// 		.catch(error => console.error(error));
	// }
	function handleGetArticles() {
		fetch(articleEndpoint)
			.then(response => response.json())
			.then(data => setArticle({ ...data }))
			.catch(error => console.error(error));
		//forceUpdate();
	}
	function handleGetImage() {
		fetch(imageEndpoint)
		.then(response => response.json())
		.then(data => {
			if (data.urls && data.urls.regular) {
			  setImageData({ ...imagedata, imageUrl: data.urls.regular });
			} else {
			  console.error(error);
			}
		  })
		.catch(error => console.error(error));
	}

	// console.log(quoteEndpoint);
	console.log(articleEndpoint);
	console.log(article);
	console.log(imageEndpoint)
	
	return (
		<>
			<ArticleList article={article} />
			<h2>Weather & Anime Quote</h2>
			<button onClick={handleGetQuoteClick}>Get Anime Quote</button>
			<button onClick={handleGetArticles}>Get Article</button>
			<button onClick={handleGetImage}>Get Image</button>
			<Weather/>
			<AnimeQuote/>
			<Image imageUrl={imagedata.imageUrl} />
		</>
	);
}

