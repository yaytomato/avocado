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
    return id === bgColorId ? "w-1 h-1 bg-black rounded-full" : "hidden";
  };

  const BgChangeBtn = ({ id, className }) => (
    <div
      onClick={() => changeBgColor(id)}
      className={`flex justify-center items-center w-3 h-3 rounded-full cursor-pointer ${className}`}
    >
      <div className={getBlackDotClassName(id)}></div>
    </div>
  );

  return (
    <div className="flex">
      <BgChangeBtn id={0} className="bg-yellow-300" />
      <BgChangeBtn id={1} className="bg-pink-300 ml-1" />
      <BgChangeBtn id={2} className="bg-blue-300 ml-1" />
    </div>
  );
};

export default BgColorUtil;
