import { useState } from "react";

export default function Gallery() {
  const [quote, setQuote] = useState({ anime: null, character: null, quote: null });

  const quoteEndpoint = 'https://animechan.xyz/api/random';



  function handleGetQuoteClick() {
    fetch(quoteEndpoint)
        .then(response => response.json())
        .then(json => setQuote(json))
        .catch(error => console.error(error));
  }

  console.log(quoteEndpoint);

  return (
    <>
      <h2>Weather & Anime Quote</h2>

      <button onClick={handleGetQuoteClick}>Get Picture</button>

      <h2>{quote.anime}</h2>
      <h3>{quote.character}</h3>
      <p>{quote.quote}</p>
    </>
  );
}