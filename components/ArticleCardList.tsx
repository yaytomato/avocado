import React from "react";

import ArticleCard from "./ArticleCard";
import { Article } from "../constants/types";

interface Props {
  articles: Article[];
}

const ArticleCardList: React.FunctionComponent<Props> = ({ articles }) => (
  <div className="flex flex-wrap">
    {articles.map((article, i) => (
      <ArticleCard key={i} id={i} article={article} />
    ))}
  </div>
);

export default ArticleCardList;
