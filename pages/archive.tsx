import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import axios from "axios";

import ArticleCardList from "../components/ArticleCardList";
import Footer from "../components/Footer";
import { getLatestReleaseDate } from "../helper";
import contents from "../constants/archive";
import { Article } from "../constants/types";

interface Props {}

const Archive: React.FunctionComponent<Props> = ({}) => {
  // ANCHOR: fetch articles
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    axios.get(contents.apiUrl).then((res) => {
      const latestReleaseDate = moment(getLatestReleaseDate());
      const filtered = res.data.filter((article) => {
        return moment(article.releaseDate).isBefore(latestReleaseDate);
      });
      setArticles(filtered);
    });
  }, []);

  // NOTE: loading
  if (!articles.length) return null;
  return (
    <React.Fragment>
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

        <ArticleCardList articles={articles} />
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default Archive;
