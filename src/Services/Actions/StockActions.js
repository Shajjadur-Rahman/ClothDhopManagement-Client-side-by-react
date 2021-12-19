import * as actionType from '../Types'
import axios from 'axios'



export const productList = () => async dispatch =>{
    dispatch({
        type: actionType.GET_PRODUCT_REQUEST
    })
    await axios({
        method: 'get',
        url: 'stock/product-list/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_PRODUCT_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
    
}


export const addProduct = product => dispatch => {
    axios({
        method: 'post',
        url: 'stock/add-product/',
        data: product
    })
    .then(response => {
        dispatch({
            type: actionType.ADD_PRODUCT,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}


export const updateProduct = product => dispatch => {
    if(window.confirm("Are you sure to update this product item ??")){
        axios({
            method: 'post',
            url: `stock/update-product/${product.id}/`,
            data: product
        })
        .then(response => {
            dispatch({
                type: actionType.UPDATE_PRODUCT,
                payload: response.data,
                id: product.id
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}



export const deactivateProduct = product_obj => dispatch => {
    let product = product_obj
        product.active = !product.active
    if(window.confirm("Are you sure to deactivate this product??")){
        axios({
            method: 'post',
            url: `stock/hide-product/${product_obj.id}/`,
            data: product
        })
        .then(response => {
            dispatch({
                type: actionType.DEACTIVATE_PRODUCT,
                id: product_obj.id
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const activateProduct = product_obj => dispatch => {
    let product = product_obj
        product.active = !product.active
    if(window.confirm("Are you sure to activate this product ??")){
        axios({
            method: 'post',
            url: `stock/hide-product/${product_obj.id}/`,
            data: product
        })
        .then(response => {
            dispatch({
                type: actionType.ACTIVATE_PRODUCT,
                id: product_obj.id
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const getDeactivateProducts = () => async dispatch => {
    dispatch({
        type: actionType.GET_HIDE_PRODUCT_REQUEST
    })
    await axios({
        method: 'get',
        url: 'stock/deactivate-products/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_HIDE_PRODUCT_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}

