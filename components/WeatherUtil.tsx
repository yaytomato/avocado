import React, { useState, useEffect } from "react";

import { getWeather } from "../gateway/weather";
import { weatherUtil as contents } from "../constants/home";

const WeatherUtil: React.FunctionComponent = () => {
  let mounted = true;
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const onFetch = (t, w) => {
      if (mounted) {
        setTemperature(t);
        setWeather(w);
      }
    };
    getWeather(onFetch);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="flex items-center">
      <img src={contents.icon} alt="날씨 아이콘" className="icon mr-2" />
      <p>
        {temperature}
        <span className="font-extrabold">{weather}</span>
      </p>
    </div>
  );
};

export default WeatherUtil;
