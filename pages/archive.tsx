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
import { articlesAPI } from "../constants/global";
import { Article } from "../constants/types";

interface Props {}

const Archive: React.FunctionComponent<Props> = ({}) => {
  let mounted = true;

  // ANCHOR: fetch articles
  const { now } = useSelector(timeSelector);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    if (now) {
      axios.get(articlesAPI).then((res) => {
        const lrd = moment(getLatestReleaseDate(now));
        const cells = res.data.feed.entry;

        const filtered = [];
        let pushRest = false;
        for (let i = 6; i < cells.length; i += 6) {
          const rd = cells[i].content.$t;
          if (pushRest || moment(rd).isBefore(lrd)) {
            // NOTE: articles are ordered in DESC releaseDate (newest -> oldest)
            pushRest = true;
            filtered.push({
              releaseDate: rd,
              category: cells[i + 1].content.$t,
              title: cells[i + 2].content.$t,
              author: cells[i + 3].content.$t,
              url: cells[i + 4].content.$t,
              img: cells[i + 5].content.$t,
            });
          }
        }

        if (mounted) {
          setArticles(filtered);
          setLoading(false);
        }
      });
    }

    return () => {
      mounted = false;
    };
  }, [now]);

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
