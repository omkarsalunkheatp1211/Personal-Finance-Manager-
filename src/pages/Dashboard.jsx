import React from 'react';
import { useExpense } from '../context/ExpenseContext';
import ExpenseForm from '../components/ExpenseForm';

const Dashboard = () => {
  const { expenses, deleteExpense } = useExpense();

  return (
    <div className="dashboard">
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      
      {/* Displaying the list of expenses */}
      <div className="expense-list">
        <h3>Expenses</h3>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.description}</span>
              <span>₹{expense.amount}</span> {/* Displaying the amount in INR */}
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
