import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterExpenseYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === parseInt(filteredYear));

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterExpenseYear={filterExpenseYearHandler} />
      {filteredExpenses.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          expenseItem={expenseItem}
        />
      ))}
    </Card>
  );
};

export default Expenses;