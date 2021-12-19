import * as actionType from '../Types'
import axios from 'axios'



// Fetch all import invoices
export const allImportInvoices = () => async dispatch => {
    dispatch({
        type: actionType.GET_EMPLOYEE_REQUEST
    })
    await axios({
        method: 'get',
        url: 'stock/import-invoice-list/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_IMPORT_INVOICE_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// Create import invoice

export const addInvoice = invoice => dispatch => {
    axios({
        method: 'post',
        url: 'stock/add-invoice/',
        data: invoice
    })
    .then(response => {
        dispatch({
            type: actionType.CREATE_IMPORT_INVOICE,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}


// Update invoice

export const updateInvoice = invoice => dispatch => {
   if(window.confirm("Are you sure to update this invoice ??")){
    axios({
        method: 'post',
        url: `stock/update-invoice/${invoice.id}/`,
        data: invoice
    })
    .then(response => {

        dispatch({
            type: actionType.UPDATE_IMPORT_INVOICE,
            payload: response.data,
            id: invoice.id
        })
        
    })
    .catch(error => {
        console.log(error)
    })
   }
}


// Delete invoice

export const deleteInvoice = id => dispatch => {
    if(window.confirm("Are you sure to delete this invoice ??")){
        axios({
            method: 'delete',
            url: `stock/delete-invoice/${id}/`
        })
        .then(response => {
            dispatch({
                type: actionType.DELETE_IMPORT_INVOICE,
                id: id
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}