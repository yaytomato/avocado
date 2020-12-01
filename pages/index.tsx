import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Layout from "../components/Layout";
import BgColorUtil from "../components/BgColorUtil";
import SearchBar from "../components/SearchBar";
import DateUtil from "../components/DateUtil";
import TimeUtil from "../components/TimeUtil";
import WeatherUtil from "../components/WeatherUtil";

import NavBar from "../components/NavBar";
import ArticleCardList from "../components/ArticleCardList";
import Footer from "../components/Footer";

import { timeSelector } from "../reducers/time";
import { getLatestReleaseDate } from "../helper";
import { index as contents } from "../constants/home";
import { articlesAPI } from "../constants/global";
import { Article } from "../constants/types";

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
  // ANCHOR: fetch articles
  const { now } = useSelector(timeSelector);
  const [articles, setArticles] = useState<Article[]>([]);
  const [releaseDate, setReleaseDate] = useState<string>("");

  useEffect(() => {
    if (now) {
      const lrd = getLatestReleaseDate(now);
      axios.get(articlesAPI).then((res) => {
        const cells = res.data.feed.entry;
        const filtered = [];
        for (let i = 6; i < cells.length; i += 6) {
          const rd = cells[i].content.$t;
          if (rd === lrd) {
            const category = cells[i + 1].content.$t;
            filtered.push({
              releaseDate: rd,
              category,
              title: cells[i + 2].content.$t,
              author: cells[i + 3].content.$t,
              url: cells[i + 4].content.$t,
              img: cells[i + 5].content.$t,
            });
            // NOTE: end traversing when all the latest articles are pushed
            if (category === "잘 움직이기") {
              i = cells.length;
            }
          }
        }

        setArticles(filtered);
        setReleaseDate(lrd);
      });
    }
  }, [now]);

  return (
    <Layout loading={!releaseDate}>
      <section>
        <BgColorUtil />
        <img
          className="h-27 mt-13.5 mx-auto cursor-pointer"
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
