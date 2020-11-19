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
import { getLatestReleaseDate } from "../helper";
import { index as contents } from "../constants/home";
import { Article } from "../constants/types";

interface Props {}

const Home: React.FunctionComponent<Props> = ({}) => {
  // ANCHOR: fetch articles
  const [articles, setArticles] = useState<Article[]>([]);
  const [releaseDate, setReleaseDate] = useState<string>("");
  useEffect(() => {
    const releaseDate = getLatestReleaseDate();

    axios.get(contents.apiUrl + releaseDate).then((res) => {
      setArticles(res.data);
      setReleaseDate(releaseDate);
    });
  }, []);

  // NOTE: loading
  if (!releaseDate) return null;
  return (
    <React.Fragment>
      <section>
        <SearchBar />
        <DateUtil />
        <TimeUtil />
        <WeatherUtil />
      </section>

      <section>
        <NavBar releaseDate={releaseDate} />
        <ArticleCardList articles={articles} />
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
