import React from "react";
import { useDispatch } from "react-redux";

import { deleteTransaction, rememberEditTransaction, toggleEditMenuOpen } from "../store/slices/transactionsSlice";

import SvgIcons from "./SvgIcons";

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();
  const {
    transactionName,
    transactionDescription,
    transactionCategory,
    transactionAmount,
    transactionDate,
  } = transaction;

  const handleDelete = () => {
    dispatch(deleteTransaction(transaction));
  };
  const handleEdit = () => {
    dispatch(rememberEditTransaction(transaction));
    dispatch(toggleEditMenuOpen());
  };

  return (
    <div className="TransactionCard">
      <div className="TransactionCard__info">
        <div className="TransactionCard__header">
          <div>
            <h3 className="TransactionCard__title">{transactionName}</h3>
            <p className="TransactionCard__category">{transactionCategory}</p>
          </div>
          <p className="TransactionCard__amount">{transactionAmount}</p>
        </div>
        <div className="TransactionCard__body">
          <p className="TransactionCard__description">{transactionDescription}</p>
          <p className="TransactionCard__date">{transactionDate}</p>
        </div>
      </div>
      <div className="TransactionCard__actions">
        <button type="button" className="TransactionCard__button" onClick={handleEdit}>
          Change
          <SvgIcons className="TransactionCard__actions-icon" name="edit" />
        </button>
        <button type="button" className="TransactionCard__button" onClick={handleDelete}>
          Delete
          <SvgIcons className="TransactionCard__actions-icon" name="trash" />
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
