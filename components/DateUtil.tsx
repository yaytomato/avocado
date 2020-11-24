import React from "react";

import { getMonthInKor, getWeekNumInKor, getWeekdayInKor } from "../helper";

const DateUtil: React.FunctionComponent = () => (
  <div>
    {getMonthInKor()} {getWeekNumInKor()}{" "}
    <span className="font-bold">{getWeekdayInKor()}</span>
  </div>
);

export default DateUtil;
