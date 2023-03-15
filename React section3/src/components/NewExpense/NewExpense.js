import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const newSaveForm = (data) => {
    const expense = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(expense, "여긴 newExpense.js야");
    props.addExpense(expense);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stepEdittingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={newSaveForm}
          onCancel={stepEdittingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
