import React from "react";
import { useSelector } from "react-redux";

import { timeSelector } from "../reducers/time";
import { getMonthInKor, getWeekNumInKor, getWeekdayInKor } from "../helper";

import { dateUtil as contents } from "../constants/home";

const DateUtil: React.FunctionComponent = () => {
  const { now } = useSelector(timeSelector);

  return (
    <div className="flex items-center">
      <img src={contents.icon} alt="날짜 아이콘" className="h-3 w-3 mr-3" />
      <p>
        {getMonthInKor(now)} {getWeekNumInKor(now)}{" "}
        <span className="font-extrabold">{getWeekdayInKor(now)}</span>
      </p>
    </div>
  );
};

export default DateUtil;
