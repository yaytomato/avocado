import React, { useState, useEffect } from "react";
import axios from "axios";

import { getWeatherInKor } from "../helper";

import { weatherUtil as contents } from "../constants/home";

const WeatherUtil: React.FunctionComponent = () => {
  let mounted = true;
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");

  const fetchWeather = async ({ latitude, longitude }) => {
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);

    if (mounted) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=kr`
        );

        const t = Math.round(response.data.main.temp);
        setTemperature(`현재 ${t} `);
        const d = getWeatherInKor(t);
        setDescription(d);
      } catch (error) {
        setDescription("날씨를 가져올 수 없었어요");
      }
    }
  };

  const didNotFetchWeather = () => {
    if (mounted) {
      setDescription("위치정보에 동의해주세요! 날씨를 알려드릴게요");
    }
  };

  useEffect(() => {
    const latitude = parseInt(localStorage.getItem("latitude"));
    const longitude = parseInt(localStorage.getItem("longitude"));
    if (latitude && longitude) {
      fetchWeather({ latitude, longitude });
    }

    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        if (
          position.coords.latitude !== latitude ||
          position.coords.longitude !== longitude
        ) {
          fetchWeather(position.coords);
        }
      }, didNotFetchWeather);
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="w-50 flex items-center">
      <img src={contents.icon} alt="날씨 아이콘" className="h-3 w-3 mr-3" />
      <p>
        {temperature}
        <span className="font-extrabold">{description}</span>
      </p>
    </div>
  );
};

export default WeatherUtil;
