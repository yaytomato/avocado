import React from "react";

import ArticleCard from "./ArticleCard";
import { Article } from "../constants/types";

interface Props {
  articles: Article[];
  randomMask?: boolean;
}

const ArticleCardList: React.FunctionComponent<Props> = ({
  articles,
  randomMask,
}) => (
  <div className="article-card-list">
    {articles.map((article, i) => (
      <ArticleCard
        key={article.id}
        order={i}
        article={article}
        randomMask={randomMask}
      />
    ))}
  </div>
);

export default ArticleCardList;
