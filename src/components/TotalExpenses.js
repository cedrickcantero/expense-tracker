// src/components/TotalExpenses.js
import React from 'react';
import '../styles/main.scss';

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="total-expenses">
      <h2>Total Expenses: ${total}</h2>
    </div>
  );
};

export default TotalExpenses;
