// src/components/ExpenseList.js
import React from 'react';
import ExpenseTable from './ExpenseTable';
import '../styles/main.scss';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <ExpenseTable expenses={expenses} />
    </div>
  );
};

export default ExpenseList;
