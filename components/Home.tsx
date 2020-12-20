import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Layout from "./Layout";
import SearchBar from "./SearchBar";
import DateUtil from "./DateUtil";
import TimeUtil from "./TimeUtil";
import WeatherUtil from "./WeatherUtil";

import NavBar from "./NavBar";
import ArticleCardList from "./ArticleCardList";
import Footer from "./Footer";

import { dateSelector } from "../reducers/time";
import { index as contents } from "../constants/home";
import { Article } from "../constants/types";
import { fetchLateReleases } from "../gateway/articles";

interface Props {
  toArchive: () => void;
}

const Home: React.FunctionComponent<Props> = ({ toArchive }) => {
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
      <section className="pt-10">
        <img
          className="h-20 mx-auto cursor-pointer"
          src={contents.logo}
          alt="아보카도 로고"
        />
      </section>

      <section>
        <SearchBar />
        <div className="mt-5 flex w-126 mx-auto justify-between">
          <DateUtil />
          <TimeUtil />
          <WeatherUtil />
        </div>
      </section>

      <section>
        <NavBar releaseDate={releaseDate} toArchive={toArchive} />
        <ArticleCardList articles={articles} />
      </section>

      <Footer />
    </Layout>
  );
};

export default Home;
