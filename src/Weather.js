import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(""); // it wil tell us if we have any results
  const [weather, setWeather] = useState({});
  function displayWeather(response) {
    setLoaded(true);

    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a8c658ffb9d133b3bdbbc569ebe9def2";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="search"
        placeholder="Type a city..."
        onChange={updateCity}
      />{" "}
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {" "}
        {form}
        <ul>
          <li>Temperature: {weather.temperature} degrees Celsius</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
