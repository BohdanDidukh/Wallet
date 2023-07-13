import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    balance: 12380.51,
    totalIncome: 0.00,
    totalPayment: 0.00,
    transactions: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      const { transactionType, transactionAmount } = action.payload;

      if (transactionType === "income") {
        state.balance += transactionAmount;
        state.totalIncome += transactionAmount;
      } else if (transactionType === "expense") {
        state.balance -= transactionAmount;
        state.totalPayment += transactionAmount;
      }

      state.transactions.push(action.payload);
    },

    editTransaction: (state, action) => {
      const { id, updatedTransaction } = action.payload;
      return {
        ...state,
        transactions: state.transactions.map((transaction) => {
          if (transaction.id === id) {
            return { ...transaction, ...updatedTransaction };
          }
          return transaction;
        }),
      };
    },
    deleteTransaction: (state, action) => {
      const transactionToDelete = action.payload;
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => JSON.stringify(transaction) !== JSON.stringify(transactionToDelete),
        ),
      };
    },
  },
});

export const { addTransaction, editTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
