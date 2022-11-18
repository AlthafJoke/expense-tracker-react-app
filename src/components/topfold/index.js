import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './topfold.css'

const TopFold = () => {
  const [query , setQuery] = useState("")

  const handleQuery = (e) => {
    // console.log(e.target.value)
    setQuery(e.target.value)

  }

  return (

    <div className='topfold'>
      {window.location.pathname === '/' ? <div className='home-topfold'>
        <div className='searchbar'>
        <i className="fa-solid fa-search"></i>
        <input  placeholder='search for expenses' value={query} onChange={(e) =>  handleQuery(e)}/>
        </div>
        <Link to="/add">
        <div className='add-button'>
        <i className="fa-solid fa-circle-plus"></i>
        <label >Add</label>
        </div>
        </Link>
        
        
      </div>:
      
      <div className='add-topfold'>
        <Link to='/'>
        <div className='add-topfold-button'>
        <i class="fa-solid fa-angle-left"></i>
        <label>Back</label>
        </div>
        </Link>

        <Link to="/">
        <div className='add-topfold-button'>
          <i className="fa-solid fa-ban"></i>
          <label>Cancel</label>
        </div>
        </Link>
        
      </div>
      }
      
    </div>
  )
}

export default TopFold
