import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ expenseItem }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItem.date} />
      <div className="expense-item__description">
        <h2>{expenseItem.title}</h2>
        <div className="expense-item__price">${expenseItem.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;