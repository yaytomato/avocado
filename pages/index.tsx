import React from "react";

import SearchBar from "../components/SearchBar";
import DateUtil from "../components/DateUtil";
import TimeUtil from "../components/TimeUtil";
import WeatherUtil from "../components/WeatherUtil";
import contents from "../constants/home";

interface Props {}

const Home: React.FunctionComponent<Props> = ({}) => (
  <div>
    <SearchBar />
    <DateUtil />
    <TimeUtil />
    <WeatherUtil />
    <h1>{contents.h1}</h1>
  </div>
);

export default Home;
