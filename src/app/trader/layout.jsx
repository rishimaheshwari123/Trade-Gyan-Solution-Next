import React from "react";
import TraderNavbar from "../../components/trader/comman/TraderNavbar";

function layout({children}) {
  return (
    <div>
      <TraderNavbar />
      {children}
    </div>
  );
}

export default layout;
