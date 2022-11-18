import {combineReducers, createStore} from "redux";
import { expenseReducer } from "../reducers/expenses";
// import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
    expenses: expenseReducer,
})
const initialState= {}
const store = createStore(reducer, initialState)
// const store = configureStore(initialState, reducer)


export default store; 