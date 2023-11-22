// import { useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArticleList from "./features/Article/Articles.js";
import Weather from "./features/Weather/Weather.js";
import AnimeQuote from "./features/AnimeQuote/AnimeQuote.js";
import Image from "./features/Image/Image.js"
import NavBar from "./Navbar.js";
import Home from "./Home.js";
import ErrorPage from "./ErrorPage.js";

export default function Gallery() {
	return (
	  <>
		<BrowserRouter>
		  <NavBar/>
		  <h2>New York, Weather, Anime Quote, and Articles</h2>
		  <Routes>
			<Route exact path="/" element={<Home />}/>
			<Route exact path="/Web_Dev_Assignment5" element={<Home />}/>
			<Route path="/articlelist" element={<ArticleList />}/>
			<Route path="/weather" element={<Weather/>}/>
			<Route path="/animequote" element={<AnimeQuote/>}/>
			<Route path="/image" element={<Image />}>
			  <Route path="weather" element={<Weather />}/>
			</Route>
			<Route path="*" element={<ErrorPage />}/>
		  </Routes>
		</BrowserRouter>
	  </>
	);
  }


