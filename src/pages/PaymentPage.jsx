import React from "react";

import PaymentList from "../components/PaymentList";
import Title from "../components/Title";

const PaymentPage = () => (
  <div className="PaymentPage">
    <div className="PaymentPage__wrapper">
      <div className="PaymentPage__title">
        <Title label="List of Payment Transactions" />
      </div>
      <PaymentList />
    </div>
  </div>
);

export default PaymentPage;
