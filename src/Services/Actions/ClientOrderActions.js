import * as actionType from '../Types'
import axios from 'axios'



// Fetching client all  orders 
export const allOrder = (id, dateObj) => async dispatch => {
    dispatch({
        type: actionType.GET_CLIENT_ORDER_REQUEST
    })
    await axios({
        method: 'get',
        url: dateObj.timestamp ? `order/all-order/${id}/?timestamp=${new Date(dateObj.timestamp).toISOString().slice(0,10)}` : `order/all-order/${id}/`
        })
        .then(response => {
            dispatch({
                type: actionType.GET_CLIENT_ORDER_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
}


// Fetching client all due orders 
export const dueOrder = (id, dateObj) => async dispatch => {
    dispatch({
        type: actionType.GET_CLIENT_DUE_ORDER_REQUEST
    })
    await axios({
        method: 'get',
        url: dateObj.timestamp ? `order/due-order/${id}/?timestamp=${new Date(dateObj.timestamp).toISOString().slice(0,10)}` : `order/due-order/${id}/`
    })
    .then(response => {
        dispatch({
            type: actionType.GET_CLIENT_DUE_ORDER_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// paid due amount 

export const payDueAmount = (amount, id) => dispatch => {
    axios({
        method: 'post',
        url: `order/pay-due-amount/${amount}/${id}/`
    })
    .then(response => {
        dispatch({
            type: actionType.PAY_DUE_AMOUNT,
            id: id,
            paid: parseFloat(amount)
        })
    })
    .catch(error => {
        console.log(error)
    })
}


export const payDueAmount2 = (amount, id) => dispatch => {
    axios({
        method: 'post',
        url: `order/pay-due-amount/${amount}/${id}/`
    })
    .then(response => {
        dispatch({
            type: actionType.PAY_DUE_AMOUNT2,
            order_id: id,
            paid_amount: parseFloat(amount)
        })
    })
    .catch(error => {
        console.log(error)
    })
}