import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import Card from "./Card";
import "./expense-list.css";

const ExpenseList = () => {
  const list = useSelector((state) => state.expenses.expenseList);
  const query = useSelector((state) => state.expenses.query)
  const filteredList = list.filter(item => item.title.includes(query))
  console.log(filteredList);
  const notifySuccess = () => toast.success('Deleted successfully')

  return (
    <div className="expence-list">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        // theme="light"
      />
      {/* {list.map((item) => (
        <h2 key={item.id}>{item.title} : {item.amount}</h2>
        
      ))} */}

      {filteredList.length? filteredList.map((item) => <Card key={item.createdAt} item={item} notifySuccess={notifySuccess}/>):
      <h2>empty</h2>}
    </div>
  );
};

export default ExpenseList;
