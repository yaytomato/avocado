import React from "react";

import { Article } from "../constants/types";

interface Props {
  id: number;
  article: Article;
}

const ArticleCard: React.FunctionComponent<Props> = ({
  id,
  article: { url, img, title, category, author },
}) => (
  <div>
    <a href={url}>
      <img src={img} alt={title} className={`thumbnail-${id % 4}`} />
    </a>
    <p>{category}</p>
    <a href={url}>
      <p>{title}</p>
    </a>
    <p>by {author}</p>
  </div>
);

export default ArticleCard;
