import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import Layout from "../components/Layout";
import ArticleCardList from "../components/ArticleCardList";
import Footer from "../components/Footer";

import { dateSelector } from "../reducers/time";
import contents from "../constants/archive";
import { Article } from "../constants/types";
import { fetchPastReleases } from "../gateway/articles";

interface Props {}

const Archive: React.FunctionComponent<Props> = ({}) => {
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
        <Link href="/">
          <div className="flex items-center mx-19 pt-10">
            <img
              src={contents.toHome}
              alt="홈으로 가기"
              className="h-4 w-4 cursor-pointer"
            />
            <h1 className="ml-2 font-lg font-extrabold cursor-pointer">
              {contents.heading}
            </h1>
          </div>
        </Link>

        <ArticleCardList articles={articles} randomMask />
      </section>

      <Footer />
    </Layout>
  );
};

export default Archive;
