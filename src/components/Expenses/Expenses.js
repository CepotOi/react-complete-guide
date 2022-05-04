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
  let expensesContent = <h2>No expenses</h2>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expenseItem={expense} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterExpenseYear={filterExpenseYearHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;