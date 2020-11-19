import React from "react";
import Link from "next/link";

import SearchBar from "../components/SearchBar";
import DateUtil from "../components/DateUtil";
import TimeUtil from "../components/TimeUtil";
import WeatherUtil from "../components/WeatherUtil";
import Footer from "../components/Footer";
import contents from "../constants/home";

interface Props {}

const Home: React.FunctionComponent<Props> = ({}) => (
  <div>
    <SearchBar />
    <DateUtil />
    <TimeUtil />
    <WeatherUtil />

    <div className="flex justify-between">
      <h1>{contents.heading}</h1>
      <p>{contents.updateMsg}</p>
      <Link href="/archive">
        <nav className="cursor-pointer">{contents.toArchive}</nav>
      </Link>
    </div>

    <Footer />
  </div>
);

export default Home;
