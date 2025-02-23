import React, { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    const deleteExpense = (id) => {
        setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpense = () => {
    return useContext(ExpenseContext);
};
