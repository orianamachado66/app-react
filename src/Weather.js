import React from "react";
import axios from "axios";
export default function Weather() {
  function handleResponse(response) {
    alert(
      `The Weather in ${city} is ${response.data.main.temp} degrees Celsius`
    );
  }
  let city = `London`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=a8c658ffb9d133b3bdbbc569ebe9def2&units=metric`;

  axios.get(url).then(handleResponse);
  return <div className="Weather"> Hello from Weatherr</div>;
}
