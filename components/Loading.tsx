import React from "react";

import { loading as contents } from "../constants/global";

const Loading: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <img src={contents.logo} alt="아보카도 로고" className="h-64" />
    <div className="ml-24">
      <p className="font-sm">
        {contents.subheading} <span className="font-extrabold">아보카도</span>
      </p>
      <h1 className="font-xl font-extrabold mt-1">{contents.heading}</h1>
    </div>
  </div>
);

export default Loading;
