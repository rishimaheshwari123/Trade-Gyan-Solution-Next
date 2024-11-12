import InvestorNavbar from "../../components/investor/comman/InvestorNavbar";
import React from "react";


function layout({children}) {
  return (
    <div>
      <InvestorNavbar />
      {children}
    </div>
  );
}

export default layout;
