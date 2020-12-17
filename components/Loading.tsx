import React from "react";

import { loading as contents } from "../constants/global";

const Loading: React.FC = () => (
  <div className="loading-container">
    <img src={contents.logo} alt="아보카도 로고" className="h-48 w-32" />
    <div className="ml-20">
      <p className="font-xs">
        {contents.subheading} <span className="font-extrabold">아보카도</span>
      </p>
      <h1 className="font-base font-extrabold mt-1">{contents.heading}</h1>
    </div>
  </div>
);

export default Loading;
