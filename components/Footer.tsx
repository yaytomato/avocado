import React from "react";

import { footer as contents } from "../constants/global";

const Footer: React.FC = () => (
  <div className="fixed bottom-0 bg-white h-7.5 w-full pl-25 py-2 font-extrabold">
    <a href="/">{contents.toSurvey}</a>
  </div>
);

export default Footer;
