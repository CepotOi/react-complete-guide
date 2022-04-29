import './ExpenseItem.css';

export default function ExpenseItem() {
  const expenseDate = new Date(2022, 4, 20);
  const expenseTitle = 'GTR 34 V SPEC NUR';
  const expenseAmount = 5000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{`$ ${expenseAmount}`}</div>
      </div>
    </div>
  );
};