import React from "react";
import WeatherSearch from "./components/WeatherSearch";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  );
}

export default App;
