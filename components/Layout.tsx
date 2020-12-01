import React from "react";
import { useSelector } from "react-redux";

import Timer from "./Timer";

import { settingsSelector } from "../reducers/settings";
import { bgColor } from "../constants/global";
interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ loading, children }) => {
  const { bgColorId } = useSelector(settingsSelector);

  const Loading = <div>loading...!</div>;

  return (
    <div className={bgColor[bgColorId]}>
      <Timer />

      {loading ? Loading : children}
    </div>
  );
};

export default Layout;
