import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import "./add-form.css";
import { useDispatch } from "react-redux";
import { addExpence } from "../../redux/actions/expenses";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./SuccessModal";
// import { v4 as uuid } from 'uuid';

const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  // const unique_id = uuid();
  // const small_id = unique_id.slice(0,8)
  // const testid = Math.floor(Math.random() * 10);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false)


  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    } else {
      setAmount(val);
    }
  };
  const handleCategroy = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
    //   console.log("not data");
        const notify = () => toast("please enter data")
        notify()
      return;
    }
    const data = {
      title: title,
      amount: amount,
      category: category,
      createdAt: new Date().toISOString(),
    };
    dispatch(addExpence(data));
    setModalOpen(true)
  };

  return (
    <div className="add-form">
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
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Enter expence name"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount</label>
        <input
          placeholder="Enter amount"
          className="amount-input"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent">
        <div className="categroy">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "category"}</label>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  key={category.id}
                  onClick={() => handleCategroy(category)}
                >
                  <label>{category.title}</label>
                  <span>{category.icon}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
