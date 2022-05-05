import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const showFormHandler = () => {
    setIsShowForm(!isShowForm);
  };

  // get the expense data from the child component
  const submitExpenseDataHandler = (submitExpenseData) => {
    const expenseData = {
      ...submitExpenseData,
      id: `e${Math.floor(
        Math.random() * Math.floor(Math.random() * Date.now())
      ).toString()}`,
    };

    // Pass the expense data to the parent component
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isShowForm ? (<button onClick={showFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} cancelShowForm={showFormHandler} />
      )}
    </div>
  );
};

export default NewExpense;