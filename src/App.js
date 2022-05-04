import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'GTR 34', amount: 5000, date: new Date(2022, 4, 20) },
    { id: 'e2', title: 'GTR 32', amount: 4500, date: new Date(2021, 7, 27) },
    { id: 'e3', title: 'RX 7', amount: 6000, date: new Date(2022, 9, 8) },
    { id: 'e4', title: 'AE86', amount: 3500, date: new Date(2020, 2, 12) },
  ];

  const [expense, setExpense] = useState(expenses);

  const addExpenseHandler = (expenseData) => {
    setExpense(prevState => [...prevState, expenseData]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </>
  );
};

export default App;