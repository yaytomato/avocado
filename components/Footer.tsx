import React from "react";

import BgColorUtil from "./BgColorUtil";
import { footer as contents } from "../constants/global";

const Footer: React.FC = () => (
  <div className="fixed bottom-0 bg-white h-6 w-full px-19 py-1.5 font-extrabold flex justify-between">
    <a href="/">{contents.toSurvey}</a>
    <BgColorUtil />
  </div>
);

export default Footer;
