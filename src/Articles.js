import React from "react";

export default function ArticleList({ articles }) {
	const listItems = articles.map((x) => {
		return (
			<li><a href={x.url}>{x.title}</a></li>
		)
	});
	//console.log(articles);
	//console.log(listItems);
	return (
		<div class="ScienceColumn">
			<h1>Science News!</h1>
			<ul>
				{listItems}
			</ul>
		</div>
	);
}