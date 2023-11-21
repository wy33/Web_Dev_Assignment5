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
	if (article.empty) {
		return (
			<>
				<button onClick={getArticle}>Get Article</button>
				<div class="ArticleColumn">
					<h1>Random Article!</h1>
					<p>Hit get Article to get a Random Wikipedia Article!</p>
				</div>
			</>
		);
	}
	return (
		<>
			<button onClick={getArticle}>Get Article</button>
			<div class="ArticleColumn">
				<h1>Random Article!</h1>
				<br/>
				<a href={article.content_urls.desktop.page}><h3>{article.title}</h3></a>
				<img src={article.thumbnail.source}/>
				<p>{article.extract}</p>
			</div>
		</>
	);
}
