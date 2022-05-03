import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: expense.title,
      amount: expense.amount,
      date: new Date(expense.date),
    };

    console.log(expenseData);
  };

  const inputChangeHandler = event => {
    const { name, value } = event.target;

    setExpense(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__group">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title"
            onChange={inputChangeHandler} value={expense.title} required />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" name="amount" placeholder="Amount" min="0.01" step="0.01"
            onChange={inputChangeHandler} value={expense.amount} required />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name="date" placeholder="Date" min="2019-01-01" max="2022-12-31"
            onChange={inputChangeHandler} value={expense.date} required />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;