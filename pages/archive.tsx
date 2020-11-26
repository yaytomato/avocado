import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import moment from "moment";
import axios from "axios";

import Layout from "../components/Layout";
import ArticleCardList from "../components/ArticleCardList";
import Footer from "../components/Footer";

import { timeSelector } from "../reducers/time";
import { getLatestReleaseDate } from "../helper";
import contents from "../constants/archive";
import { Article } from "../constants/types";

interface Props {}

const Archive: React.FunctionComponent<Props> = ({}) => {
  // ANCHOR: fetch articles
  const { now } = useSelector(timeSelector);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    if (now) {
      axios.get(contents.apiUrl).then((res) => {
        const latestReleaseDate = moment(getLatestReleaseDate(now));
        const filtered = res.data.filter((article) => {
          return moment(article.releaseDate).isBefore(latestReleaseDate);
        });
        setArticles(filtered);
        setLoading(false);
      });
    }
  }, [now]);

  return (
    <Layout loading={loading}>
      <section>
        <Link href="/">
          <div className="flex">
            <img
              src={contents.toHome}
              alt="홈으로 가기"
              className="cursor-pointer"
            />
            <h1 className="cursor-pointer">{contents.heading}</h1>
          </div>
        </Link>

        <ArticleCardList articles={articles} randomMask />
      </section>

      <Footer />
    </Layout>
  );
};

export default Archive;
