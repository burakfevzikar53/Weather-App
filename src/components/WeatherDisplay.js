import React from "react";
import "../styles/WeatherDisplay.css";
import weatherIcons from "../utils/weatherIcons";

const WeatherDisplay = ({ weather }) => {
  const { name, main, weather: weatherInfo } = weather;
  const weatherMain = weatherInfo[0].main;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>
        <strong>Temperature:</strong> {main.temp}°C
      </p>
      <p>
        <strong>Condition:</strong> {weatherInfo[0].description}
      </p>
      <img
        src={weatherIcons[weatherMain] || "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"}
        alt={weatherInfo[0].description}
      />
    </div>
  );
};

export default WeatherDisplay;
