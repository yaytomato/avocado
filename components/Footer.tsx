import React from "react";

import BgColorUtil from "./BgColorUtil";
import { footer as contents } from "../constants/global";

const Footer: React.FC = () => (
  <div className="fixed bottom-0 bg-white h-7.5 w-full px-25 py-2 font-extrabold flex justify-between">
    <a href="/">{contents.toSurvey}</a>
    <BgColorUtil />
  </div>
);

export default Footer;
