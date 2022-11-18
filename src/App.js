
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from './pages/add-expense';
import ExpenseList from './components/expense-list';

function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/add' element={<AddExpense/>}/>
        

      </Routes>

      
      
      
      
      <div>Footer</div>
    </Router>
  );
}

export default App;
