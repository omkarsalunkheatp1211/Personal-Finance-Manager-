import React, { useState } from 'react';
import { useExpense } from '../context/ExpenseContext';

const ExpenseForm = () => {
  const { addExpense } = useExpense();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description) {
      addExpense({
        id: Date.now(),
        amount,
        description,
      });
      setAmount('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="input-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add expense"
        />
      </div>
      <div className="input-group">
        <label>Amount (₹)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the amount in INR ( ₹ )"
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
