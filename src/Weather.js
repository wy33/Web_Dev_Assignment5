import { useState } from "react";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null); 

    async function getWeather() {
        const apiKey = "fadfb7e8044643bdab516c4e0ffeb2a8"
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}&units=I`
        if (city === "") return;
        const response = await fetch(apiUrl);
        const weather = await response.json();
        setWeather(weather["data"][0]);
    }

    return (
        <>
            <main className="weather-container">
                <header>
                    <input 
                            type="text" 
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} 
                            onClick={() => setWeather(null)}
                            placeholder="San Diego, California" 
                            required
                    />
                    <button onClick={getWeather}>Get Weather</button>
                </header>
                <section>
                    {weather && (
                        <div className="weather-info">
                            <span>City: {weather.city_name}</span>
                            <span>Temperature: {weather.temp} Fahrenheit </span>
                            <span>Date: {weather.datetime}</span>
                            <span>Forecast: {weather.weather["description"]}</span>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}