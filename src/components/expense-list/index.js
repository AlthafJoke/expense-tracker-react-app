import React from 'react'
import { useSelector } from 'react-redux';

import Card from './Card';
import "./expense-list.css"

const ExpenseList = () => {
    const listEx = useSelector((state)=> state.expenses);
    console.log(listEx[0])
    
    
  return (
    <div className='expence-list'>
        
    {listEx.length? listEx.map(items => (<Card items={items} />)):
        
        
        <div>hello</div>
    
    }
        
        
        
        


      
    </div>
  )
 
  
}

export default ExpenseList
