import React from "react";

export default function ArticleList({ article }) {
	if (article.empty) {
		return (
			<div class="ArticleColumn">
				<h1>Random Article!</h1>
				<p>Hit get Article to get a Random Wikipedia Article!</p>
			</div>
		);
	}
	return (
		<div class="ArticleColumn">
			<h1>Random Article!</h1>
			<br/>
			<a href={article.content_urls.desktop.page}><h3>{article.title}</h3></a>
			<img src={article.thumbnail.source}/>
			<p>{article.extract}</p>
		</div>
	);
}