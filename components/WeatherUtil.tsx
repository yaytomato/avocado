import React, { useState, useEffect } from "react";
import axios from "axios";

import { getWeatherInKor } from "../helper";

const WeatherUtil: React.FunctionComponent = () => {
  let mounted = true;
  const [weather, setWeather] = useState("");

  const fetchUserPositionWeather = (position) => {
    const { latitude, longitude } = position.coords;
    if (mounted) {
      fetchWeather(latitude, longitude);
    }
  };

  const fetchSeoulWeather = () => {
    if (mounted) {
      setWeather("위치정보에 동의해주세요! 날씨를 알려드릴게요");
    }
  };

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=kr`
      );

      const weather = getWeatherInKor(response.data.main.feels_like);
      setWeather(weather);
    } catch (error) {
      setWeather("날씨를 가져올 수 없었어요");
    }
  };

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        fetchUserPositionWeather,
        fetchSeoulWeather
      );
    }

    return () => {
      mounted = false;
    };
  }, []);

  return <div>{weather}</div>;
};

export default WeatherUtil;
