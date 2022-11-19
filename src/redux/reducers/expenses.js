import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";


const LOCALSTORAGE = () => {
    // here we will get the item
    const list = localStorage.getItem("expense-list")
    let expenses =[];
    if (list) {
        // when we get data to local storage, it will be in the form of strings 
        //not the form that we can use in our code
        expenses = JSON.parse(list)
        
    }
    return expenses
}

const initialState = {
    expenseList: LOCALSTORAGE(),
    query: "",
    

};

export const expenseReducer=(state= initialState, action) => {
    switch(action.type) {
        case ADD_EXPENSE : {
            // here well will get item
            localStorage.setItem("expense-list", JSON.stringify([...state.expenseList, action.data]))
            
            return{
                ...state,
                expenseList: [...state.expenseList, action.data],
                
            };
        }
        case DELETE_EXPENSE: {
            const {data} = action;
            const updatedList = state.expenseList.filter(
                item=> item.createdAt !== data
            );
            localStorage.setItem("expense-list", JSON.stringify(updatedList))
            return {
                ...state,
                expenseList:updatedList,
            }
        }
        case SEARCH_EXPENSE: {
            const {query} = action
            return {
                ...state,
                query:query,
            }
        }
        default:
            return state;
    }
}