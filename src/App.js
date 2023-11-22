// import { useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArticleList from "./features/Article/Articles.js";
import Weather from "./features/Weather/Weather.js";
import AnimeQuote from "./features/AnimeQuote/AnimeQuote.js";
import Image from "./features/Image/Image.js"
import NavBar from "./Navbar.js";
import Home from "./Home.js";

export default function Gallery() {
	// const [, forceUpdate] = useReducer(x => x + 1, 0);
	
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<><Home/></>}/>
                    <Route path="/articlelist" element={<><h2>This button calls the API to give us a random article</h2><ArticleList /></>}/>
                    <Route path="/weather" element={<><h2>This button calls the API to give us the weather in NYC</h2><Weather/></>}/>
                    <Route path="/animequote" element={<><h2>This button calls the API to give us a random anime quote</h2><AnimeQuote/></>}/>
                    <Route path="/image" element={<><h2>This button calls the API to give us a random picture of </h2><Image /></>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}


