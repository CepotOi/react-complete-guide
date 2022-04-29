import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 20th 2022</div>
      <div className="expense-item__description">
        <h2>GTR 34 V SPEC NUR</h2>
        <div className="expense-item__price">$5000</div>
      </div>
    </div>
  );
};