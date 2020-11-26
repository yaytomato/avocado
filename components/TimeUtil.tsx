import React from "react";
import { useSelector } from "react-redux";

import { timeSelector } from "../reducers/time";

import { getTimeMeridiem, getHourInKor, getMinuteInKor } from "../helper";

const TimeUtil: React.FunctionComponent = () => {
  const { now } = useSelector(timeSelector);

  return (
    <div>
      {getTimeMeridiem(now)} {getHourInKor(now)}{" "}
      <span className="font-bold">{getMinuteInKor(now)}</span>분
    </div>
  );
};

export default TimeUtil;
