import React from "react";

import UpgradePlan from "./UpgradePlan";
import AddNewTransaction from "./AddNewTransaction";

const MainContent = () => (
  <div className="MainContent">
    <div className="MainContent__uppgrage-plan">
      <UpgradePlan />
    </div>
    <AddNewTransaction />
  </div>
);

export default MainContent;
