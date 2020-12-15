import axios from "axios";
import moment from "moment";

import { getWeatherInKor } from "../helper";

export const getWeather = async (onFetch) => {
  loadPrevWeather(onFetch);

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const prevCoords = getPrevCoords();

        // NOTE: fetch weather api only if coords changed or if weather caching expired
        if (
          Math.abs(prevCoords.latitude - position.coords.latitude) > 0.001 ||
          Math.abs(prevCoords.longitude - position.coords.longitude) > 0.001 ||
          !isWeatherCached()
        ) {
          fetchWeather(position.coords, onFetch);
        }
      },
      () => failToGetCoords(onFetch)
    );
  }
};

const loadPrevWeather = (onFetch) => {
  const prev = localStorage.getItem("temperature");
  if (prev) {
    const data = prev.split(" ");
    const weather = formatWeather(parseInt(data[0]));
    onFetch(...weather);
  }
};

const formatWeather = (temperature: number, weather: string) => {
  const description = getWeatherInKor(temperature, weather);
  return [`현재 ${temperature} `, description];
};

const getPrevCoords = () => {
  const latitude = parseFloat(localStorage.getItem("latitude"));
  const longitude = parseFloat(localStorage.getItem("longitude"));
  return { latitude, longitude };
};

const isWeatherCached = () => {
  const prev = localStorage.getItem("temperature");
  if (prev) {
    const data = prev.split(" ");
    const timestamp = moment(data[1]);
    const now = moment();

    // NOTE: cache weather data for 6 hours
    if (now.diff(timestamp, "h") > 6) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};

const failToGetCoords = (onFetch) => {
  onFetch("", "위치정보에 동의해주세요! 날씨를 알려드릴게요");
};

const fetchWeather = async (coords, onFetch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=kr`
    );
    console.log(response.data);
    const temperature = Math.round(response.data.main.temp);
    const weatherEng = response.data.weather.main;
    const weather = formatWeather(temperature, weatherEng);
    onFetch(...weather);

    localStorage.setItem("latitude", coords.latitude);
    localStorage.setItem("longitude", coords.longitude);
    const timestamp = moment().toISOString(true);
    localStorage.setItem("temperature", `${temperature} ${timestamp}`);
  } catch (error) {
    failToFetchWeather(onFetch);
  }
};

const failToFetchWeather = async (onFetch) => {
  onFetch("", "잠시 후 날씨를 알려드릴게요");
};
