import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "69933c53624e0caf7e42663237b30f32";

  const getWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found");
      } else {
        setError("Something went wrong");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getBackground = () => {
    if (!weather) return "#4facfe";

    const condition = weather.weather[0].main;

    if (condition === "Clear") return "#fbc531";
    if (condition === "Clouds") return "#dcdde1";
    if (condition === "Rain") return "#74b9ff";

    return "#4facfe";
  };

  return (
    <div className="app" >
      <div className="card">
        <h2 className="title">Weather App</h2>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
          className="input"
        />

        <button onClick={getWeather} className="button">
          Search
        </button>

        {loading && <p>Loading...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h3>{weather.name}, {weather.sys.country}</h3>
            <p>{weather.main.temp} °C</p>
            <p>{weather.weather[0].main}</p>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;