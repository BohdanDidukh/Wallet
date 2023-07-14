import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    balance: 2380.51,
    totalIncome: 0.00,
    totalPayment: 0.00,
    editTransaction: "",
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

    rememberEditTransaction: (state, action) => {
      state.editTransaction = action.payload;
    },

    toggleEditMenuOpen: (state) => {
      state.editMenuOpen = !state.editMenuOpen;
    },

    editTransactions: (state, action) => {
      const { updatedTransaction } = action.payload;
      state.transactions = state.transactions.map((transaction) => {
        if (transaction.id === updatedTransaction.id) {
          return { ...updatedTransaction };
        }
        return { ...transaction };
      });
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

export const {
  addTransaction, rememberEditTransaction, editTransactions, deleteTransaction, toggleEditMenuOpen,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
