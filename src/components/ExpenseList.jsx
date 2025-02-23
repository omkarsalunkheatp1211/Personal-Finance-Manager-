import React from 'react';
import { useExpense } from '../context/ExpenseContext';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpense();

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span>{expense.description} - ${expense.amount}</span>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
