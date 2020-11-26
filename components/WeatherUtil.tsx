import React, { useState } from "react";

const WeatherUtil: React.FunctionComponent = () => {
  const [temp, setTemp] = useState("");

  const fetchWeather = (position) => {
    const { latitude, longitude } = position.coords;
    setTemp(latitude);
  };

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(fetchWeather, console.log);
  }

  return <div>{temp}</div>;
};

export default WeatherUtil;
