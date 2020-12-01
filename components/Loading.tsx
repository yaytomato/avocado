import React from "react";

import { loading as contents } from "../constants/global";

const Loading: React.FC = () => (
  <div className="flex">
    <img src={contents.logo} alt="아보카도 로고" />
    <div>
      <p>{contents.subheading}</p>
      <p>{contents.heading}</p>
    </div>
  </div>
);

export default Loading;
