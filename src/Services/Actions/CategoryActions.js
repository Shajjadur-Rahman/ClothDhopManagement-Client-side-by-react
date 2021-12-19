import * as actionType from '../Types'
import axios from 'axios'



// Fetch all category
export const allCategories = () => async dispatch =>{
    dispatch({
        type: actionType.GET_CATEGORY_REQUEST
    })
    await axios({
        method: 'get',
        url: 'stock/category-list/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_CATEGORY_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}



// Crete product category
export const createCategory = category => async dispatch => {
    await axios({
            method: 'post',
            url: 'stock/create-category/',
            data: category
        })
        .then(response => {
            dispatch({
                type: actionType.CREATE_CATEGORY,
                payload: response.data
            })
            console.log("Its working bro")
        })
        .catch(error => {
            console.log(error)
        })
}


// update category

export const updateCategory = category => async dispatch => {
    if(window.confirm("Are you sure to update category info .... ??")){
        axios({
            method: 'post',
            url: `stock/update-category/${category.id}/`,
            data: category
        })
        .then(response => {
            dispatch({
                type: actionType.UPDATE_CATEGORY,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const deleteCategory = cat_id => dispatch => {
    if(window.confirm("Are you sure to delete category info ... ??")){
        axios({
            method: 'delete',
            url: `stock/delete-category/${cat_id}/`
        })
        .then(response => {
            dispatch({
                type: actionType.DELETE_CATEGORY,
                id: cat_id
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}