import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense__group">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" name="amount" placeholder="Amount" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name="date" placeholder="Date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;