import React from "react";
import { useSelector } from "react-redux";

import TransactionCard from "./TransactionCard";

const IncomeList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const sortedTransactions = transactions
    .filter((transaction) => transaction.transactionType === "income")
    .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate));

  return (
    <div className="Transaction__list">
      {sortedTransactions.length > 0 ? (
        sortedTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} id={transaction.id} transaction={transaction} />
        ))
      ) : (
        <h2 className="Transaction__message">No transactions available</h2>
      )}
    </div>
  );
};

export default IncomeList;
