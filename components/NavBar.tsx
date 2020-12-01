import React from "react";
import Link from "next/link";
import moment from "moment";

import { navBar as contents } from "../constants/home";

interface Props {
  releaseDate: string;
}

const NavBar: React.FunctionComponent<Props> = ({ releaseDate }) => {
  const today = moment();
  const isTodayReleaseDate = today.isSame(moment(releaseDate), "d");

  return (
    <div className="nav-bar">
      <div className="flex items-center">
        <p className="text-2xl">
          <span className="font-extrabold">이틀</span>마다 돌아오는{" "}
          <span className="font-extrabold">네개</span>의 건강
        </p>
        <span className="text-xs ml-5 text-gray-600">
          {isTodayReleaseDate ? "오늘" : "어제"}
          {contents.updateMsg}
        </span>
      </div>

      <Link href="/archive">
        <nav className="text-2xl text-gray-500 cursor-pointer">{contents.toArchive}</nav>
      </Link>
    </div>
  );
};

export default NavBar;
