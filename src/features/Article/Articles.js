import React from "react";
import { useSelector, UseDispatch, useDispatch } from 'react-redux';

import { setArticle } from './ArticleSlice.js';

export default function ArticleList() {
	const article = useSelector((state) => state.article);
	const dispatch = useDispatch();

	const getArticle = () => {
		const articleEndpoint = "https://en.wikipedia.org/api/rest_v1/page/random/summary";

		fetch(articleEndpoint)
			.then(response => response.json())
			.then(data => dispatch(setArticle({ ...data })))
			.catch(error => console.error(error));
	};
	if (article.empty) { getArticle(); }
	if (article.empty) {
		return (
			<>
				<h1>Random Article!</h1>
				<p>On this page, you can find a random article blurb from Wikipedia! This will let you cycle through until you find one that interests you, then just click the title to follow it to the article itself!</p>
				<button onClick={getArticle}>Get Article</button>
				<div class="ArticleColumn">
					<p>Hit get Article to get a Random Wikipedia Article!</p>
				</div>
			</>
		);
	}
	return (
		<>
			<h1>Random Article!</h1>
			<p>On this page, you can find a random article blurb from Wikipedia! This will let you cycle through until you find one that interests you, then just click the title to follow it to the article itself!</p>
			<button onClick={getArticle}>Get Article</button>
			<div class="ArticleColumn">
				<a href={article.content_urls.desktop.page}><h3>{article.title}</h3></a>
				<img src={article.thumbnail.source} class="ArticleImage" />
				<br/>
				<p class="ArticleText">{article.extract}</p>
			</div>
		</>
	);
}
