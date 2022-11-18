import React from 'react'
import AddForm from '../../components/add-form'
import ExpenseList from '../../components/expense-list'
import TopFold from '../../components/topfold'
import './add-expence.css'

const AddExpense = () => {
  return (
    <div className='add-expence'>
      
        <TopFold/>
        <AddForm/>
        <ExpenseList/>
    </div>
  )
}

export default AddExpense
