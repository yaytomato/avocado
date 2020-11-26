import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import { setTime } from "../reducers/time";

const Timer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const now = moment();
    dispatch(setTime(now.toISOString(true)));
    const secondsLeft = 60 - now.second();

    let timerId;
    timerId = setTimeout(() => {
      dispatch(setTime(moment().toISOString(true)));

      timerId = setInterval(() => {
        dispatch(setTime(moment().toISOString(true)));
      }, 60000);
    }, secondsLeft * 1000);

    return () => clearInterval(timerId);
  }, []);

  return null;
};

export default Timer;
