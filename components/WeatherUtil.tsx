import React, { useState, useEffect } from "react";

import { getWeather } from "../gateway/weather";
import { weatherUtil as contents } from "../constants/home";

const WeatherUtil: React.FunctionComponent = () => {
  let mounted = true;
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const onFetch = (t, d) => {
      if (mounted) {
        setTemperature(t);
        setDescription(d);
      }
    };
    getWeather(onFetch);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="flex items-center">
      <img src={contents.icon} alt="날씨 아이콘" className="h-3 w-3 mr-3" />
      <p>
        {temperature}
        <span className="font-extrabold">{description}</span>
      </p>
    </div>
  );
};

export default WeatherUtil;
