import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

// Approach Orang Lain
const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses" >
      {
        expenses.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
            date={expenseItem.date}
            title={expenseItem.title}
            amount={expenseItem.amount} />
        ))
      }
    </Card >
  );
};

export default Expenses;