import { useReducer, useState } from "react";
import ArticleList from "./Articles.js";

export default function Gallery() {
	const [quote, setQuote] = useState({ anime: null, character: null, quote: null });
	const [articles, setArticles] = useState([]);
	const [, forceUpdate] = useReducer(x => x + 1, 0);

	const quoteEndpoint = 'https://animechan.xyz/api/random';
	const articleEndpoint = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=7d0dd96cc13345e5ac2ea643830a09cc";
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
	console.log(quoteEndpoint);
	console.log(articleEndpoint);
	console.log(articles);

	return (
		<>
			<ArticleList articles={articles} />
			<h2>Weather & Anime Quote</h2>
			<button onClick={handleGetQuoteClick}>Get Anime Quote</button>
			<button onClick={handleGetArticles}>Get Articles</button>
			<h2>{quote.anime}</h2>
			<h3>{quote.character}</h3>
			<p>{quote.quote}</p>
		</>
	);
}