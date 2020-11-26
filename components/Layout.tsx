import React from "react";

import Timer from "./Timer";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ loading, children }) => {
  const Loading = <div>loading...!</div>;

  return (
    <React.Fragment>
      <Timer />

      {loading ? Loading : children}
    </React.Fragment>
  );
};

export default Layout;
