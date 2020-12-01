import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Timer from "./Timer";
import Loading from "./Loading";

import { settingsSelector, setBgColorId } from "../reducers/settings";
import { bgColor } from "../constants/global";
interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ loading, children }) => {
  const dispatch = useDispatch();
  const { bgColorId } = useSelector(settingsSelector);

  useEffect(() => {
    const storedId = parseInt(localStorage.getItem("bg-color-id") ?? "0");
    dispatch(setBgColorId(storedId));
  }, []);

  return (
    <div className={bgColor[bgColorId]}>
      <Timer />

      {loading ? <Loading /> : children}
    </div>
  );
};

export default Layout;
