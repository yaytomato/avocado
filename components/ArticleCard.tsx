import React from "react";

import { Article } from "../constants/types";
import { articleCard as contents } from "../constants/global";

interface Props {
  id: number;
  article: Article;
  randomMask?: boolean;
}

const ArticleCard: React.FunctionComponent<Props> = ({
  id,
  article: { url, img, title, category, author },
  randomMask = false,
}) => (
  <div className="text-center">
    <a href={url}>
      <img
        src={img}
        alt={title}
        className={`thumbnail-${
          randomMask ? Math.round(Math.random() * 3) : id % 4
        }`}
      />
    </a>
    <div className="mt-8 flex justify-center items-center">
      <img
        src={contents[category]}
        alt="아티클 아이콘"
        className="h-3 w-3 mr-2"
      />
      <p className="font-extrabold">{category}</p>
    </div>
    <a href={url}>
      <p className="mt-3 text-2xl font-bold">{title}</p>
    </a>
    <p className="mt-3 text-lg text-gray-600">by {author}</p>
  </div>
);

export default ArticleCard;
