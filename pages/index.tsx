import React, { useState, useEffect } from "react";

import Home from "../components/Home";
import Archive from "../components/Archive";
import * as gtag from "../helper";

const Avocado = () => {
  const home = 0;
  const archive = 1;
  const [page, setPage] = useState(home);

  useEffect(() => {
    if (page === home) {
      gtag.pageview("/");
    } else {
      gtag.pageview("/archive");
    }
  }, [page]);

  if (page === home) {
    return <Home toArchive={() => setPage(archive)} />;
  } else {
    return <Archive toHome={() => setPage(home)} />;
  }
};

export default Avocado;
