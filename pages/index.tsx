import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import BgColorUtil from "../components/BgColorUtil";
import SearchBar from "../components/SearchBar";
import DateUtil from "../components/DateUtil";
import TimeUtil from "../components/TimeUtil";
import WeatherUtil from "../components/WeatherUtil";

import NavBar from "../components/NavBar";
import ArticleCardList from "../components/ArticleCardList";
import Footer from "../components/Footer";

import { dateSelector } from "../reducers/time";
import { index as contents } from "../constants/home";
import { Article } from "../constants/types";
import { fetchLateReleases } from "../gateway/articles";

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
  // ANCHOR: fetch articles
  let mounted = true;
  const today = useSelector(dateSelector);
  const [articles, setArticles] = useState<Article[]>([]);
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (today) {
      const onFetch = (filtered, latestReleaseDate) => {
        if (mounted) {
          setArticles(filtered);
          setReleaseDate(latestReleaseDate);
          setLoading(false);
        }
      };
      fetchLateReleases(today, onFetch);
    }

    return () => {
      mounted = false;
    };
  }, [today]);

  return (
    <Layout loading={loading}>
      <section className="pt-13.5">
        <img
          className="h-27 mx-auto cursor-pointer"
          src={contents.logo}
          alt="아보카도 로고"
        />
      </section>

      <section>
        <SearchBar />
        <div className="mt-7 flex w-165 mx-auto justify-between">
          <DateUtil />
          <TimeUtil />
          <WeatherUtil />
        </div>
      </section>

      <section>
        <NavBar releaseDate={releaseDate} />
        <ArticleCardList articles={articles} />
      </section>

      <Footer />
    </Layout>
  );
};

export default Home;
