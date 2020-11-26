import React from "react";
import { useSelector } from "react-redux";

import { timeSelector } from "../reducers/time";

import { getMonthInKor, getWeekNumInKor, getWeekdayInKor } from "../helper";

const DateUtil: React.FunctionComponent = () => {
  const { now } = useSelector(timeSelector);

  return (
    <div>
      {getMonthInKor(now)} {getWeekNumInKor(now)}{" "}
      <span className="font-bold">{getWeekdayInKor(now)}</span>
    </div>
  );
};

export default DateUtil;
