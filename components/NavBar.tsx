/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import moment from "moment";

import { navBar as contents } from "../constants/home";

interface Props {
  releaseDate: string;
  toArchive: () => void;
}

const NavBar: React.FunctionComponent<Props> = ({ releaseDate, toArchive }) => {
  const today = moment();
  const isTodayReleaseDate = today.isSame(moment(releaseDate), "d");

  return (
    <div className="nav-bar">
      <div className="flex items-center">
        <p className="font-lg">
          <span className="font-extrabold">이틀</span>마다 돌아오는{" "}
          <span className="font-extrabold">네개</span>의 건강
        </p>
        <span className="text-xs ml-5 text-gray-600">
          {isTodayReleaseDate ? "오늘" : "어제"}
          {contents.updateMsg}
        </span>
      </div>

      <nav className="font-lg text-gray-500 cursor-pointer" onClick={toArchive}>
        {contents.toArchive}
      </nav>
    </div>
  );
};

export default NavBar;
