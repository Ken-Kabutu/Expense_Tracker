import React from 'react';
import './App.css';
import ExpenseEntryForm from './components/ExpenseEntryForm'; 
// import ExpenseList from './components/ExpenseList'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>EXPENSE TRACKER</p>
        Learn how the app works

        {/* Render the ExpenseEntryForm component */}
        <ExpenseEntryForm />
        {/* Render the ExpenseList component */}
        {/* <ExpenseList /> */}
      </header>
    </div>
  );
}

export default App;
