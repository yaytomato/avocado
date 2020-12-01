import React from "react";
import { useSelector } from "react-redux";

import { timeSelector } from "../reducers/time";
import { getTimeMeridiem, getHourInKor, getMinuteInKor } from "../helper";

import { timeUtil as contents } from "../constants/home";

const TimeUtil: React.FunctionComponent = () => {
  const { now } = useSelector(timeSelector);

  return (
    <div className="flex items-center">
      <img src={contents.icon} alt="시간 아이콘" className="h-3 w-3 mr-3" />
      <p>
        {getTimeMeridiem(now)} {getHourInKor(now)}{" "}
        <span className="font-extrabold">{getMinuteInKor(now)}</span>분
      </p>
    </div>
  );
};

export default TimeUtil;
