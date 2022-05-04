import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const years = [2022, 2021, 2020, 2019];

  const filterChangeHandler = (event) => {
    const { name, value } = event.target;

    props.onFilterExpenseYear(value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} name="year" onChange={filterChangeHandler}>
          {years.map((year, key) => (
            <option key={key}>{year}</option>
          ))}
        </select>
      </div>
    </div >
  );
};

export default ExpensesFilter;