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

    const handleSubmit = async (e) => {
        e.preventDefault();
        //implementing validation logic

        //sending expense data to the api
        try {
            const response = await fetch('http://127.0.0.1:3000/expenses', {
                method:'POST',
                headers: {
                    'Content-Type':"application/json",
                },
                body: JSON.stringify(expenseData),
            });
            if (response.ok) {
                //expense created

            } else {
                //handling error
            }
        } catch (error) {
            console.error('Error:' error);
        }
    };


    
}