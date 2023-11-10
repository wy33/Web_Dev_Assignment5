import React from "react";

export default function AnimeQuote({ details }) {
	return (
		<div className="anime-quote">
			<h2>{details.anime}</h2>
			<h3>{details.character}</h3>
			<p>{details.quote}</p>
		</div>
	);
}
