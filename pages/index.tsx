import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import DateUtil from "../components/DateUtil";
import TimeUtil from "../components/TimeUtil";
import WeatherUtil from "../components/WeatherUtil";

import NavBar from "../components/NavBar";
import ArticleCardList from "../components/ArticleCardList";
import Footer from "../components/Footer";
import { index as contents } from "../constants/home";
import { Article } from "../constants/types";

interface Props {}

const Home: React.FunctionComponent<Props> = ({}) => {
  // ANCHOR: fetch articles
  const [articles, setArticles] = useState<Article[]>([]);
  const [releaseDate, setReleaseDate] = useState<string>("");
  useEffect(() => {
    const today = moment();
    const yesterday = moment().add(-1, "days");

    // ANCHOR: update articles every odd day of year
    const releaseDate =
      today.dayOfYear() % 2
        ? today.format("YYYY-MM-DD")
        : yesterday.format("YYYY-MM-DD");

    axios.get(contents.apiUrl + releaseDate).then((res) => {
      setArticles(res.data);
      setReleaseDate(releaseDate);
    });
  }, []);

  // NOTE: loading
  if (!releaseDate) return null;
  return (
    <div>
      <SearchBar />
      <DateUtil />
      <TimeUtil />
      <WeatherUtil />

      <NavBar releaseDate={releaseDate} />
      <ArticleCardList articles={articles} />

      <Footer />
    </div>
  );
};

export default Home;
