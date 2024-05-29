import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            alert("Budget value cannot exceed 20,000");
            event.target.value = 20000;
        }
        else if (event.target.value < totalExpenses){
            alert(`You cannot reduce the budget value lower than the spending (spending = ${totalExpenses} currently) `);
            event.target.value = totalExpenses;
        }
        else 
            setNewBudget(event.target.value);
        //budget = newBudget;
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
