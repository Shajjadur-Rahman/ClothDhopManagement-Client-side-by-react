import * as actionType from '../Types'
import axios from 'axios'



// Fetching all cart items
export const allCartItems = id => async dispatch => {
    dispatch({
        type: actionType.GET_CART_ITEMS_REQUEST
    })
    axios({
        method: 'get',
        url: `order/cart-view/${id}/`
    })
    .then(response => {
        dispatch({
            type: actionType.GET_CART_ITEMS_SUCCESS,
            payload: response.data.data,
            total_cart_items: response.data.total_cart_items,
            total: response.data.total,
            total_discount: response.data.total_discount,
        })
    })
    .catch(error => {
        console.log(error)
    })
}

// Add product in cart 

export const addToCart = (cartObj, qty, len_qty, id) => dispatch => {
    axios({
        method: 'post',
        url: 'order/add-to-cart/',
        data: cartObj
    })
    .then(response => {
        dispatch({
            type: actionType.ADD_TO_CART,
            payload: response.data.data,
            customer: response.data.data.customer,
            total_item: response.data.total_item,
            qty: qty,
            len_qty: len_qty,
            id: id
        })

        const customer = response.data.data.customer
        localStorage.setItem("customer", JSON.stringify(customer))

    })
    .catch(error => {
        console.log(error)
    })
}

export const removeProduct = (pro_id, cus_id, p_qty, type) => dispatch => {
    if(window.confirm("Are you sure to remove product from cart ??")){
        axios({
            method: 'post',
            url: `order/remove-product/${pro_id}/${cus_id}/${p_qty}/${type}/`
        })
        .then(response => {
            dispatch({
                type: actionType.REMOVE_PRODUCT,
                id: pro_id
            })
        })
    }
}

export const completeOrder = (customer_id, paid_amount, history) => dispatch => {
    if(window.confirm("Are you sure to complete this order ??")){
        axios({
            method: 'post',
            url: `order/complete-order/${paid_amount}/${customer_id}/`
        })
        .then(response => {
            dispatch({
                type: actionType.COMPLTETE_ORDER,
            })
            history.push('/stock')
        })
        .catch(error => {
            console.log(error)
        })
    }
}