import React, { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { addTransaction } from "../store/slices/transactionsSlice";

import Title from "./Title";

const AddNewTransaction = () => {
  const dispatch = useDispatch();
  const [transactionDate, setTransactionDate] = useState(dayjs());
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionTypeChange = (value, formik) => {
    setTransactionType(value);
    formik.setFieldValue("transactionType", value);
  };

  return (
    <div className="AddNewTransaction">
      <div className="AddNewTransaction__title">
        <Title label="Add New Transaction" />
      </div>
      <Formik
        initialValues={{
          transactionName: "",
          transactionDescription: "",
          transactionCategory: "",
          transactionAmount: "",
          transactionType: "",
          transactionDate: transactionDate.format("YYYY-MM-DDTHH:mm"),
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
            !values.transactionCategory
            && values.transactionType === "expense"
          ) {
            errors.transactionCategory = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          const transactionData = {
            ...values,
            transactionDate: transactionDate.format("YYYY-MM-DDTHH:mm"),
          };
          dispatch(addTransaction(transactionData));
          resetForm();
        }}
      >
        {({ isSubmitting, ...formik }) => (
          <Form className="AddNewTransaction__form">
            <div className="AddNewTransaction__form-element">
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
            <div className="AddNewTransaction__form-element">
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
            <div className="AddNewTransaction__form-element">
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
            <div className="AddNewTransaction__form-element">
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
                onChange={(event) => (handleTransactionTypeChange(event.target.value, formik))}
                name="transactionType"
              >
                <MenuItem value="" disabled>
                  Select a type
                </MenuItem>
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
              </Field>
            </div>
            {transactionType === "expense" && (
              <div className="AddNewTransaction__form-element">
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
            <div className="AddNewTransaction__form-element">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  className="StyledDateTimePicker"
                  defaultValue={transactionDate}
                  onChange={(newValue) => setTransactionDate(newValue)}
                />
              </LocalizationProvider>
            </div>
            <div className="AddNewTransaction__form-button">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewTransaction;
