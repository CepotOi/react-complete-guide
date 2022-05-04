import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    { id: 'e1', title: 'GTR 34', amount: 5000, date: new Date(2022, 4, 20) },
    { id: 'e2', title: 'GTR 32', amount: 4500, date: new Date(2021, 7, 27) },
    { id: 'e3', title: 'RX 7', amount: 6000, date: new Date(2022, 9, 8) },
    { id: 'e4', title: 'AE86', amount: 3500, date: new Date(2020, 2, 12) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses(prevExpenses => [expenseData, ...prevExpenses]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;