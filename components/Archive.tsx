/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Layout from "./Layout";
import ArticleCardList from "./ArticleCardList";
import Footer from "./Footer";

import { dateSelector } from "../reducers/time";
import contents from "../constants/archive";
import { Article } from "../constants/types";
import { fetchPastReleases } from "../gateway/articles";

interface Props {
  toHome: () => void;
}

const Archive: React.FunctionComponent<Props> = ({ toHome }) => {
  let mounted = true;

  // ANCHOR: fetch articles only when date changes
  const today = useSelector(dateSelector);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (today) {
      const onFetch = (filtered) => {
        if (mounted) {
          setArticles(filtered);
          setLoading(false);
        }
      };
      fetchPastReleases(today, onFetch);
    }

    return () => {
      mounted = false;
    };
  }, [today]);

  return (
    <Layout loading={loading}>
      <section>
        <div className="flex items-center mx-19 pt-10" onClick={toHome}>
          <img
            src={contents.toHome}
            alt="홈으로 가기"
            className="h-4 w-4 cursor-pointer"
          />
          <h1 className="ml-2 font-lg font-extrabold cursor-pointer">
            {contents.heading}
          </h1>
        </div>

        <ArticleCardList articles={articles} randomMask />
      </section>

      <Footer />
    </Layout>
  );
};

export default Archive;
