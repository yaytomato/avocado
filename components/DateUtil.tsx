import React from "react";
import { useSelector } from "react-redux";

import { dateSelector } from "../reducers/time";
import { getMonthInKor, getWeekNumInKor, getWeekdayInKor } from "../helper";

import { dateUtil as contents } from "../constants/home";

const DateUtil: React.FunctionComponent = () => {
  const today = useSelector(dateSelector);

  return (
    <div className="flex items-center">
      <img src={contents.icon} alt="날짜 아이콘" className="icon mr-2" />
      <p>
        {getMonthInKor(today)} {getWeekNumInKor(today)}{" "}
        <span className="font-extrabold">{getWeekdayInKor(today)}</span>
      </p>
    </div>
  );
};

export default DateUtil;
