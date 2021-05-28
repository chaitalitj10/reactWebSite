
import "./Expense.css";
import Card from "../UI/Card";
import Filter from "./Filter";
import "./Filter.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  });

  
  
  return (
    <div>
      <Card className="expenses">
        <Filter selected={filterYear} 
        onFilter={filterChangeHandler} 
        /> 
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses}/>      
      </Card>
    </div>
  );
};

export default Expenses;
