import React, { useState } from 'react';

function ExpenseForm() {
    const [expenseData, setExpenseData] = useState({
        amount: '',
        date: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseData({
            ...expenseData,
            [name]:value,
        });
    };

    
}