import * as actionType from '../Types'
import axios from 'axios'




// Fecthing current year sales record !

export const currentYearSales = yearSelected => async dispatch => {
    dispatch({
        type: actionType.GET_FULL_YEAR_SALES_REQUEST
    })
   await axios({
        method: 'get',
        url: yearSelected ? `order/order-in-year/?year=${yearSelected}` : 'order/order-in-year/',

    })
    .then(response => {
        dispatch({
            type: actionType.GET_FULL_YEAR_SALES_SUCCESS,
            payload: response.data.order_summary,
            total_profit: response.data.total_profit_in_year,
            total_sold_qty: response.data.sold_qty_in_year,
            year: response.data.year
        })
    })
    .catch(error => {
        console.log(error)
    })
}

// Fecthing current month sales
export const saleInMonth = (month, year) => async dispatch => {
    dispatch({
        type: actionType.GET_SALE_DETAIL_REQUEST
    })
    await axios({
        method: 'get',
        url: `order/sale-in-month/${month}/${year}/`,
    })
    .then(response => {
        dispatch({
            type: actionType.GET_SALE_DETAIL_SUCCESS,
            payload: response.data.data,
            total_sales: response.data.total_sales,
            total_qty: response.data.total_qty,
            total_profit: response.data.total_profit
        })
    })
}

// Fecthing today's sales
export const getTodaySales = () => async dispatch => {
    dispatch({
        type: actionType.GET_TODAY_SALES_REQUEST
    })
    await axios({
        method: 'get',
        url: 'order/today-sale/',
    })
    .then(response => {
        dispatch({
            type: actionType.GET_TODAY_SALES_SUCCESS,
            payload: response.data.data,
            total_sales: response.data.total_sales,
            total_qty: response.data.total_qty,
            total_profit: response.data.total_profit

        })
    })
    .catch(error => {
        console.log(error)
    })
}


// Fecthing today's due sales 

export const getTodayDueSales = () => async dispatch => {
    dispatch({
        type: actionType.TODAY_DUE_SALES_REQUEST
    })
    await axios({
        method: 'get',
        url: 'order/today-due-sales/'
    })
    .then(response => {
        dispatch({
            type: actionType.TODAY_DUE_SALES_SUCCESS,
            payload: response.data.data,
            total_paid: response.data.total_paid,
            total_due: response.data.total_due,
            total: response.data.total
        })
    })
    .catch(error => {
        console.log(error)
    })
}

// Fecthing today's due sales items

export const getTodayDueSaleItems = id => async dispatch => {
    dispatch({
        type: actionType.TODAY_DUE_SALE_ITEMS_REQUEST
    })
    await axios({
        method: 'get',
        url: `order/today-due-sale-items/${id}/`
    })
    .then(response => {
        dispatch({
            type: actionType.TODAY_DUE_SALE_ITEMS_SUCCESS,
            payload: response.data.data,
            total_sales: response.data.total_sales,
            total_qty: response.data.total_qty,
            total_profit: response.data.total_profit,
            paid_amount: response.data.paid_amount,
            due_amount: response.data.due_amount
        })
    })
    .catch(error => {
        console.log(error)
    })
    
}


// Fecthing today's cash sales 

export const getTodayCashSales = () => async dispatch => {
    dispatch({
        type: actionType.GET_TODAY_CASH_SALES_REQUEST
    })
    await axios({
        method: 'get',
        url: 'order/today-cash-sales/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_TODAY_CASH_SALES_SUCCESS,
            payload: response.data.data,
            total_paid: response.data.total_paid,
            total_due: response.data.total_due,
            total: response.data.total
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// Fecthing today's cash sales items
export const getTodayCashSaleItems = id => async dispatch => {
    dispatch({
        type: actionType.GET_TODAY_CASH_SALES_ITEMS_REQUEST
    })
    await axios({
        method: 'get',
        url: `order/today-cash-sale-items/${id}/`
    })
    .then(response => {
        dispatch({
            type: actionType.GET_TODAY_CASH_SALES_ITEMS_SUCCESS,
            payload: response.data.data,
            total_sales: response.data.total_sales,
            total_qty: response.data.total_qty,
            total_profit: response.data.total_profit,
            paid_amount: response.data.paid_amount,
            due_amount: response.data.due_amount
        })
    })
    .catch(error => {
        console.log(error)
    })
    
}