import React, { useState } from "react";

import Home from "../components/Home";
import Archive from "../components/Archive";

const Avocado = () => {
  const home = 0;
  const archive = 1;
  const [page, setPage] = useState(home);

  if (page === home) {
    return <Home toArchive={() => setPage(archive)} />;
  } else {
    return <Archive toHome={() => setPage(home)} />;
  }
};

export default Avocado;
