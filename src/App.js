// src/App.js
import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList'; 
import TotalExpenses from './components/TotalExpenses';
import './styles/main.scss';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter(expense => expense.description.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} />
      <TotalExpenses expenses={filteredExpenses} />
    </div>
  );
};

export default App;
