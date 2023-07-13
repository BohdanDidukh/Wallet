import React from "react";

import SvgIcons from "./SvgIcons";

const TransactionTotalValueCard = ({ icon, totalValue, label }) => (
  <div className="TransactionTotalValueCard">
    <div className="TransactionTotalValueCard__icon">
      <SvgIcons name={icon} />
    </div>
    <div className="TransactionTotalValueCard__wrapper">
      <p className="TransactionTotalValueCard__total-value">{totalValue}</p>
      <p className="TransactionTotalValueCard__text">{label}</p>
    </div>
  </div>
);
export default TransactionTotalValueCard;
