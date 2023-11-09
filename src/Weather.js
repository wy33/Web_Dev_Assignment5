import { useState } from "react";

export default function Weather() {
    const [weather, setWeather] = useState(null); 

    async function getWeather() {
        const apiKey = "jZDyXHGKiLhcbj8YyDAWzQHLQBADGgIb"
        const locationKey = 349727
        const apiUrl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
        const response = await fetch(apiUrl);
        const weather = await response.json();
        setWeather(weather[0]);
    }

    return (
        <>
            <main className="weather-container">
                <header>
                <button onClick={getWeather}>Get Weather</button>
                </header>
                <section> 
                    {weather && (
                        <div className="weather-info">
                            <span>City: New York</span>
                            <span>Temperature: {weather.Temperature.Imperial.Value} Fahrenheit </span>
                            <span>Percipitation: {weather.HasPercipitation === true ? "Yes" : "False"}</span>
                            <span>Forecast: {weather.WeatherText}</span>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
