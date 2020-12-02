import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { setTime, setDate } from "../reducers/time";

const Timer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const now = {
      time: "",
      date: "",
    };
    updateTimeAndDate(now);
    const secondsLeft = 60 - moment(now.time).second();

    let timerId;
    // NOTE: update time on next minute
    timerId = setTimeout(() => {
      updateTimeAndDate(now);

      // NOTE: update time every minute
      timerId = setInterval(() => {
        updateTimeAndDate(now);
      }, 60000);
    }, secondsLeft * 1000);

    return () => clearInterval(timerId);
  }, []);

  const updateTimeAndDate = (prev) => {
    prev.time = moment().toISOString(true);
    dispatch(setTime(prev.time));
    const today = moment(prev.time).format("YYYY-MM-DD");
    if (today !== prev.date) {
      prev.date = today;
      dispatch(setDate(today));
    }
  };

  return null;
};

export default Timer;
