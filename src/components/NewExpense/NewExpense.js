import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
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
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;