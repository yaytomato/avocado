import React from "react";
import { motion } from "framer-motion";

import { Article } from "../constants/types";
import { articleCard as contents } from "../constants/global";

interface Props {
  order: number;
  article: Article;
  randomMask?: boolean;
}

const ArticleCard: React.FunctionComponent<Props> = ({
  order,
  article: { id, url, img, title, category, author },
  randomMask = false,
}) => (
  <motion.div
    whileHover={{
      scale: 1.04,
      transition: { duration: 0.4 },
    }}
    className="mt-14 text-center"
  >
    <a href={url}>
      <img
        id={`click_${id}_img`}
        src={img}
        alt={title}
        className={`thumbnail-${
          randomMask ? Math.round(Math.random() * 3) : order % 4
        } gtm-article`}
      />
    </a>
    <div className="mt-4 flex justify-center items-center">
      <img
        src={contents[category]}
        alt="아티클 아이콘"
        className="h-3 w-3 mr-2"
      />
      <p className="font-extrabold">{category}</p>
    </div>
    <a
      href={url}
      id={`click_${id}_title`}
      className={`block mt-2 font-lg font-bold gtm-article`}
    >
      {title}
    </a>
    <p className="mt-2 font-lg text-gray-600">by {author}</p>
  </motion.div>
);

export default ArticleCard;
