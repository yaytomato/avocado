import React from "react";

import { getTimeMeridiem, getHourInKor, getMinuteInKor } from "../helper";

const TimeUtil: React.FunctionComponent = () => (
  <div>
    {getTimeMeridiem()} {getHourInKor()}{" "}
    <span className="font-bold">{getMinuteInKor()}</span>분
  </div>
);

export default TimeUtil;
