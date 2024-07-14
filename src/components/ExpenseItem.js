// src/components/ExpenseItem.js
import React from 'react';
import '../styles/main.scss';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <p>{expense.date} - {expense.description} - ${expense.amount}</p>
    </div>
  );
};

export default ExpenseItem;
