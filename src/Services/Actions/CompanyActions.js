import * as actionType from '../Types'
import axios from 'axios'



// Fetch all supplier companies

export const allCompanies = () => async dispatch => {
    dispatch({
        type: actionType.GET_COMPANY_REQUEST
    })
    await axios({
        method: 'get',
        url: 'stock/company-list/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_COMAPNY_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// Create supplier company
export const createCompany = company => dispatch => {
    axios({
        method: 'post',
        url: 'stock/create-company/',
        data: company
    })

    .then(response => {
        dispatch({
            type: actionType.CREATE_COMAPNY,
            payload: response.data
        })
        console.log(company)
    })
    .catch(error => {
        console.log(error)
    })
}


// Upadte supplier company

export const updateComapny = company => dispatch => {
    if(window.confirm("Are you sure to update this comapny info .... ??")){
        axios({
            method: 'post',
            url: `stock/update-company/${company.id}/`,
            data: company
        })
        .then(response => {
            dispatch({
                type: actionType.UPDATE_COMPANY,
                payload: response.data,
                id: company.id
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}


// delete supplier company 
export const deleteCompany = com_id => dispatch => {
    if(window.confirm("Are you sure to delete this company info .... ???")){
        axios({
            method: 'delete',
            url: `stock/delete-company/${com_id}/`
        })
        .then(response => {
            dispatch({
                type: actionType.DELETE_COMPANY,
                id: com_id
            })
        })
        .catch(error => {
            console.log("You can not delete this due to having cupple of products unser this company !")
        })
    }
}