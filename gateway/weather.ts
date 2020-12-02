import axios from "axios";
import _ from "lodash";

import { getWeatherInKor } from "../helper";

export const getWeather = async (onFetch) => {
  const prevCoords = getPrevCoords();
  if (prevCoords.latitude && prevCoords.longitude) {
    fetchWeather(prevCoords, onFetch);
  }

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!_.isEqual(prevCoords, position.coords)) {
          fetchWeather(position.coords, onFetch);
        }
      },
      () => failToGetCoords(onFetch)
    );
  }
};

const getPrevCoords = () => {
  const latitude = parseFloat(localStorage.getItem("latitude"));
  const longitude = parseFloat(localStorage.getItem("longitude"));
  return { latitude, longitude };
};

const failToGetCoords = (onFetch) => {
  onFetch("", "위치정보에 동의해주세요! 날씨를 알려드릴게요");
};

const fetchWeather = async (coords, onFetch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=kr`
    );
    const temperature = Math.round(response.data.main.temp);
    const description = getWeatherInKor(temperature);
    onFetch(`현재 ${temperature} `, description);

    localStorage.setItem("latitude", coords.latitude);
    localStorage.setItem("longitude", coords.latitude);
  } catch (error) {
    failToFetchWeather(onFetch);
  }
};

const failToFetchWeather = async (onFetch) => {
  onFetch("", "잠시 후 날씨를 알려드릴게요");
};
