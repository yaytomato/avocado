import React from "react";
import moment from "moment";
import "moment/locale/ko";

import { monthInKor, getWeekNumInKor } from "../helper";

const DateUtil: React.FunctionComponent = () => {
  const now = moment();

  return (
    <div>
      {monthInKor[now.month()]} {getWeekNumInKor(now)} {now.format("dddd")}
    </div>
  );
};

export default DateUtil;
