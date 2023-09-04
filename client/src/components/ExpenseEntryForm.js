// ExpenseEntryForm.js
import React, { useState } from 'react';

function ExpenseEntryForm() {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    description: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Expense created successfully
      // Optionally, you can reset the form or perform other actions.
      setFormData({
        amount: '',
        date: '',
        description: '',
        category: '',
      });
      // You can also display a success message to the user if needed.
      alert('Expense created successfully');
    } else {
      // Handle error scenarios.
      // For example, you can display an error message to the user.
      alert('Error creating expense');
      // You can also log the specific error details to the console for debugging.
      console.error('Error:', response.statusText);
    }
  };

  return (
    <div>
      <h2>Expense Entry Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseEntryForm;
