import { useSelector, useDispatch } from 'react-redux';
import { setWeather } from './WeatherSlice';

export default function Weather() {
	const weather = useSelector((state) => state.weather);
	const dispatch = useDispatch();

    async function getWeather() {
        const apiKey = "jZDyXHGKiLhcbj8YyDAWzQHLQBADGgIb"
        const locationKey = 349727
        const apiUrl = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
        const response = await fetch(apiUrl);
        const weather = await response.json();
        dispatch(setWeather(weather[0]));
    }

    return (
        <>
            <main className="weather-container">
                <header>
                <button onClick={getWeather}>Get Weather</button>
                </header>
                <section> 
                    {weather.temperature != 0 && (
                        <div className="weather-info">
                            <span>City: New York</span>
                            <span>Temperature: {weather.temperature} Fahrenheit </span>
                            <span>Precipitation: {weather.hasPercipitation === true ? "Yes" : "None"}</span>
                            <span>Forecast: {weather.forecast}</span>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
