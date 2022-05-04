import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterExpenseYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(filteredYear);
  };

  return (
    <Card className="expenses" >
      <ExpensesFilter selectedYear={filteredYear} onFilterExpenseYear={filterExpenseYearHandler} />
      {expenses.map((expenseItem) =>
      (
        <ExpenseItem
          key={expenseItem.id}
          // id={expenseItem.id}
          // date={expenseItem.date}
          // title={expenseItem.title}
          // amount={expenseItem.amount} 
          expenseItem={expenseItem}
        />
      )
      )};
    </Card >
  );
};

export default Expenses;