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
          <div className="flex items-center mx-25 pt-13.5">
            <img
              src={contents.toHome}
              alt="홈으로 가기"
              className="h-5 w-5 cursor-pointer"
            />
            <h1 className="ml-3 text-2xl font-extrabold cursor-pointer">
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
