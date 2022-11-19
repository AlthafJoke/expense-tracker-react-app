import React from "react";
import { useSelector } from "react-redux";

import Card from "./Card";
import "./expense-list.css";

const ExpenseList = () => {
  const list = useSelector((state) => state.expenses.expenseList);
  console.log(list);

  return (
    <div className="expence-list">
      {/* {list.map((item) => (
        <h2 key={item.id}>{item.title} : {item.amount}</h2>
        
      ))} */}

      {list.length? list.map((item) => <Card item={item}/>):
      <h2>empty</h2>}
    </div>
  );
};

export default ExpenseList;
