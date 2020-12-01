/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { settingsSelector, setBgColorId } from "../reducers/settings";

const BgColorUtil: React.FC = () => {
  const dispatch = useDispatch();
  const { bgColorId } = useSelector(settingsSelector);

  const changeBgColor = (newId) => {
    localStorage.setItem("bg-color-id", newId);
    dispatch(setBgColorId(newId));
  };

  const getBlackDotClassName = (id) => {
    return id === bgColorId ? "w-5 h-5 bg-black rounded-full" : "hidden";
  };

  const BgChangeBtn = ({ id, color }) => (
    <div
      onClick={() => changeBgColor(id)}
      className={`flex justify-center items-center w-10 h-10 rounded-full ${color}`}
    >
      <div className={getBlackDotClassName(id)}></div>
    </div>
  );

  return (
    <div className="flex">
      <BgChangeBtn id={0} color="bg-yellow-300" />
      <BgChangeBtn id={1} color="bg-pink-300" />
      <BgChangeBtn id={2} color="bg-blue-300" />
    </div>
  );
};

export default BgColorUtil;
