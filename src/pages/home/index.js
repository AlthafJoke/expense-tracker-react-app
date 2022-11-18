 import React from 'react';
import ExpenseList from '../../components/expense-list';
import TopFold from '../../components/topfold';
 import './home.css'
 
 const Home = () => {
  
   return (
     <div className='home'>
        <TopFold/>
        <div>
            <ExpenseList/>
        </div>
       
     </div>
   )
 }
 
 export default Home
 