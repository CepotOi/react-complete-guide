import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ expenseItem }) => {
  const [title, setTitle] = useState(expenseItem.title);

  const onClickHandler = () => {
    setTitle(prompt('Enter new title'));
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItem.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseItem.amount}</div>
      </div>
      <button onClick={onClickHandler}>Button</button>
    </Card>
  );
};

export default ExpenseItem;