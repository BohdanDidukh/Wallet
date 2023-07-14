import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import {
  editTransactions,
  toggleEditMenuOpen,
} from "../store/slices/transactionsSlice";

import Title from "./Title";

const EditTransaction = () => {
  const dispatch = useDispatch();
  const editMenuOpen = useSelector((state) => state.transactions.editMenuOpen);
  const editTransaction = useSelector(
    (state) => state.transactions.editTransaction,
  );
  const [transactionDate, setTransactionDate] = useState(dayjs());
  const [editTransactionType, setTransactionType] = useState("");

  const handleTransactionTypeChange = (value, formik) => {
    setTransactionType(value);
    formik.setFieldValue("transactionType", value);
  };

  return (
    <div className={`EditTransaction ${editMenuOpen ? "open" : "close"}`}>
      <div className="EditTransaction__title">
        <Title label="Edit Transaction" />
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          transactionName: editTransaction
            ? editTransaction.transactionName
            : "",
          transactionDescription: editTransaction
            ? editTransaction.transactionDescription
            : "",
          transactionCategory: editTransaction
            ? editTransaction.transactionCategory
            : "",
          transactionAmount: editTransaction
            ? editTransaction.transactionAmount
            : "",
          transactionType: editTransaction
            ? editTransaction.transactionType
            : "",
          transactionDate: editTransaction
            ? editTransaction.transactionDate
            : transactionDate.format("YYYY-MM-DDTHH:mm"),
        }}
        validate={(values) => {
          const errors = {};
          if (!values.transactionName) {
            errors.transactionName = "Required";
          }
          if (!values.transactionDescription) {
            errors.transactionDescription = "Required";
          }
          if (!values.transactionAmount) {
            errors.transactionAmount = "Required";
          } else if (values.transactionAmount <= 0) {
            errors.transactionAmount = "Amount must be greater than 0";
          }
          if (!values.transactionType) {
            errors.transactionType = "Required";
          }
          if (
            !values.transactionCategory && values.transactionType === "expense"
          ) {
            errors.transactionCategory = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const updatedTransaction = {
            id: editTransaction.id,
            ...values,
            transactionDate: transactionDate.format("YYYY-MM-DDTHH:mm"),
          };
          dispatch(editTransactions({ updatedTransaction }));
          dispatch(toggleEditMenuOpen());
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, ...formik }) => (
          <Form className="EditTransaction__form">
            <div className="EditTransaction__form-element">
              <Field
                component={TextField}
                className="CustomTextField"
                label="Transaction Name"
                required
                variant="outlined"
                color="primary"
                type="text"
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                name="transactionName"
              />
            </div>
            <div className="EditTransaction__form-element">
              <Field
                component={TextField}
                className="CustomTextField"
                label="Transaction Description"
                required
                variant="outlined"
                color="primary"
                type="text"
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                name="transactionDescription"
              />
            </div>
            <div className="EditTransaction__form-element">
              <Field
                component={TextField}
                className="CustomTextField"
                label="Transaction Amount"
                required
                variant="outlined"
                color="primary"
                type="number"
                inputProps={{ min: 0 }}
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                }}
                name="transactionAmount"
              />
            </div>
            <div className="EditTransaction__form-element">
              <Field
                component={TextField}
                className="CustomTextField"
                label="Transaction Type"
                required
                variant="outlined"
                color="primary"
                select
                fullWidth
                InputLabelProps={{
                  style: {
                    color: "#fff",
                  },
                  shrink: true,
                }}
                SelectProps={{
                  MenuProps: {
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  },
                }}
                onChange={(event) => (
                  handleTransactionTypeChange(event.target.value, formik)
                )}
                name="transactionType"
              >
                <MenuItem value="" disabled>
                  Select a type
                </MenuItem>
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
              </Field>
            </div>
            {editTransactionType === "expense" && (
              <div className="EditTransaction__form-element">
                <Field
                  component={TextField}
                  className="CustomTextField"
                  label="Expense Category"
                  required
                  variant="outlined"
                  color="primary"
                  select
                  fullWidth
                  InputLabelProps={{
                    style: {
                      color: "#fff",
                    },
                    shrink: true,
                  }}
                  SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    },
                  }}
                  name="transactionCategory"
                >
                  <MenuItem value="" disabled>
                    Select an expense category
                  </MenuItem>
                  <MenuItem value="Groceries">Groceries</MenuItem>
                  <MenuItem value="Rent">Rent</MenuItem>
                  <MenuItem value="Utilities">Utilities</MenuItem>
                  <MenuItem value="Transportation">Transportation</MenuItem>
                  <MenuItem value="Dining">Dining</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Education">Education</MenuItem>
                  <MenuItem value="Travel">Travel</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Field>
              </div>
            )}
            <div className="EditTransaction__form-element">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  className="StyledDateTimePicker"
                  defaultValue={transactionDate}
                  onChange={(newValue) => setTransactionDate(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div className="EditTransaction__form-button">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditTransaction;
