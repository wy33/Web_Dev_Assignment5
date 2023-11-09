import { useReducer, useState } from "react";
import ArticleList from "./Articles.js";
import Weather from "./Weather.js";

export default function Gallery() {
	const [quote, setQuote] = useState({ anime: null, character: null, quote: null });
	const [articles, setArticles] = useState([]);
	const [, forceUpdate] = useReducer(x => x + 1, 0);
	const [imagedata, setImageData] = useState({ imageUrl: null });

	const quoteEndpoint = 'https://animechan.xyz/api/random';
	const articleEndpoint = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=7d0dd96cc13345e5ac2ea643830a09cc";
	const imageEndpoint = 'https://api.unsplash.com/photos/random?query=newyorkcity&client_id=0-afBKY6mwQSalPCH365npBnVfjKlYNL6bIwH9Zz8PY'

	function handleGetQuoteClick() {
		fetch(quoteEndpoint)
			.then(response => response.json())
			.then(json => setQuote(json))
			.catch(error => console.error(error));
	}
	function handleGetArticles() {
		fetch(articleEndpoint)
			.then(response => response.json())
			.then(data => setArticles(data.articles))
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
			  console.error("Image URL not found in the response.");
			}
		  })
		.catch(error => console.error(error));
	}

	console.log(quoteEndpoint);
	console.log(articleEndpoint);
	console.log(articles);
	console.log(imageEndpoint)
	
	return (
		<>
			<ArticleList articles={articles} />
			<h2>Weather & Anime Quote</h2>
			<button onClick={handleGetQuoteClick}>Get Anime Quote</button>
			<button onClick={handleGetArticles}>Get Articles</button>
			<button onClick={handleGetImage}>Get Image</button>
			<Weather/>
			<h2>{quote.anime}</h2>
			<h3>{quote.character}</h3>
			<p>{quote.quote}</p>
			{imagedata.imageUrl && <img src={imagedata.imageUrl} alt="Random Image" />}
		</>
	);
}