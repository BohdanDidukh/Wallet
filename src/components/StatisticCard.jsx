import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

import TransactionTotalValueCard from "./TransactionTotalValueCard";

const StatisticCard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const balance = useSelector((state) => state.transactions.balance);
  const totalIncome = useSelector((state) => state.transactions.totalIncome);
  const totalPayment = useSelector((state) => state.transactions.totalPayment);

  const categoryStatistics = transactions.reduce(
    (stats, transaction) => {
      const { transactionType, transactionAmount, transactionCategory } = transaction;

      if (transactionType === "expense") {
        if (stats.expense[transactionCategory]) {
          stats.expense[transactionCategory] += transactionAmount;
        } else {
          stats.expense[transactionCategory] = transactionAmount;
        }
      }

      return stats;
    },
    { expense: {} },
  );

  const expenseData = Object.entries(categoryStatistics.expense).map(
    ([category, amount]) => ({ category, amount }),
  );

  return (
    <div className="Statistics">
      <div className="Statistics__cards">
        <TransactionTotalValueCard
          label="Total Balance"
          icon="money"
          totalValue={balance}
        />
        <TransactionTotalValueCard
          label="Total Income"
          icon="money-hand"
          totalValue={totalIncome}
        />
        <TransactionTotalValueCard
          label="Total Payment"
          icon="payment-black"
          totalValue={totalPayment}
        />
      </div>
      <div className="Statistics__chart">
        <ResponsiveContainer width="100%" aspect={4 / 3}>
          <PieChart>
            <Pie
              data={[
                { name: "Total Payment", value: totalPayment },
                { name: "Total Income", value: totalIncome },
              ]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="100%"
              fill="#8884d8"
            >
              <Cell fill="#22313f" />
              <Cell fill="#5c6675" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <h2 className="Statistics__label">
          Total Income and Payment Statistics
        </h2>
      </div>

      <div className="Statistics__chart">
        <BarChart width={600} height={300} data={expenseData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
        <h2 className="Statistics__label">Expense Statistics</h2>
      </div>
    </div>
  );
};
export default StatisticCard;
