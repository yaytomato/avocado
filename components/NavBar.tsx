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
    <div className="flex justify-between">
      <h1>
        <span className="font-bold">이틀</span>마다 돌아오는{" "}
        <span className="font-bold">네개</span>의 건강
      </h1>
      <p>
        {isTodayReleaseDate ? "오늘" : "어제"}
        {contents.updateMsg}
      </p>
      <Link href="/archive">
        <nav className="cursor-pointer">{contents.toArchive}</nav>
      </Link>
    </div>
  );
};

export default NavBar;
