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
  <div className="flex flex-wrap">
    {articles.map((article, i) => (
      <ArticleCard key={i} id={i} article={article} randomMask={randomMask} />
    ))}
  </div>
);

export default ArticleCardList;
