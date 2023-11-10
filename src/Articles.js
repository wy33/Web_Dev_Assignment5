import React from "react";

export default function ArticleList({ articles }) {
	//const listItems = articles.map((x) => {
		//return (
			//<li><a href={x.url}>{x.title}</a></li>
		//)
	//});
	return (
		<div className="ScienceColumn">
			<h1>Science News!</h1>
			<ul>
				{articles && articles.map((article) => (
					<li key={article.author}><a href={article.url}>{article.title}</a></li>
				))}
			</ul>
		</div>
	);
}
