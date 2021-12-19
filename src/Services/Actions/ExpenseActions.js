import * as actionType from '../Types'
import axios from 'axios'

// Fetching all exopenses 

// export const getExpenses = searchValue => async dispatch => {
//     dispatch({
//         type: actionType.GET_EXPENSES_REQUEST
//     })
//     await axios({
//         method: 'get',
//         url: searchValue.timestamp ? `expense/all-expenses/?timestamp=${new Date(searchValue.timestamp).toISOString().slice(0,10)}` : 'expense/all-expenses/'
//     })
//     .then(response => {
//         dispatch({
//             type: actionType.GET_EXPENSES_SUCCESS,
//             payload: response.data
//         })
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }


// Add new expense

export const addExpense = expense => dispatch => {
    axios({
        method: 'post',
        url: 'expense/add-expenses/',
        data: expense
    })
    .then(response => {
        dispatch({
            type: actionType.ADD_EXPENSE,
            payload: response.data.data,
            total_expense: response.data.total_expense
        })
    })
    .catch(error => {
        console.log(error)
    })
}


export const updateExpense = expense => dispatch => {
    axios({
        method: 'post',
        url: `expense/update-expenses/${expense.id}/`,
        data: expense
    })
    .then(response => {
        dispatch({
            type: actionType.UPDATE_ESPENSE,
            payload: response.data.data,
            id: expense.id
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// Fetching yearly expense summary 

export const getYearlyExpenseSummary = yearSelected => async dispatch => {
    dispatch({
        type: actionType.GET_YEARLY_EXPENSES_REQUEST
    })
    axios({
        method: 'get',
        url: yearSelected ? `expense/expenses-in-year/?year=${yearSelected}` : `expense/expenses-in-year/`
    })
    .then(respense => {
        dispatch({
            type: actionType.GET_YEARLY_EXPENSES_SUCCESS,
            payload: respense.data.data,
            total_expense_in_year: respense.data.total_expense_in_year,
            year: respense.data.year
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// fetching monthly expenses

export const getMonthlyExpense = (month, year, searchValue) => async dispatch => {
    dispatch({
        type: actionType.GET_MONTHLY_EXPENSE_REQUEST
    })
    await axios({
        method: 'get',
        url: searchValue.timestamp ? `expense/expenses-in-month/${month}/${year}/?timestamp=${new Date(searchValue.timestamp).toISOString().slice(0,10)}` : `expense/expenses-in-month/${month}/${year}/`
    }).then(response => {
        dispatch({
            type: actionType.GET_MONTHLY_EXPENSE_SUCCESS,
            payload: response.data.data,
            total_expense: response.data.total_expense
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// Fetching today's expenses

export const getTodayExpenses = () => async dispatch => {
    dispatch({
        type: actionType.GET_TODAY_EXPENSE_REQUEST
    })
    await axios({
        method: 'get',
        url: 'expense/today-expenses/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_TODAY_EXPENSE_SUCCESS,
            payload: response.data.data,
            total_expense: response.data.total_expense
        })
    })
    .catch(error => {
        console.log(error)
    })
}