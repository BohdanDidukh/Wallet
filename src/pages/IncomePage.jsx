import React from "react";

import IncomeList from "../components/IncomeList";
import Title from "../components/Title";
import EditTransaction from "../components/EditTransaction";

const IncomePage = () => (
  <div className="IncomePage">
    <div className="IncomePage__wrapper">
      <div className="IncomePage__title">
        <Title label="List of Income Transactions" />
      </div>
      <IncomeList />
      <EditTransaction />
    </div>
  </div>
);

export default IncomePage;
