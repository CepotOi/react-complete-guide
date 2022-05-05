import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseItem key={expense.id} expenseItem={expense} />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;