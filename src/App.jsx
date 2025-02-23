import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <ExpenseProvider>
      <Router>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </ExpenseProvider>
  );
};

export default App;
