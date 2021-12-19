import axios from 'axios'
import * as actionType from '../Types'



export const getInvoiceProducts = invoice_id => async dispatch => {
    dispatch({
        type: actionType.GET_INVOICE_PRODUCT_REQUEST
    })
    axios({
        method: 'get',
        url: `stock/invoice-related-products/${invoice_id}/`
    })
    .then(response => {
        dispatch({
            type: actionType.GET_INVOICE_PRODUCT_SUCCESS,
            payload: response.data.data,
            total_import: response.data.total_import,
            total_item: response.data.total_item,
            import_expense: response.data.import_expense
        })
    })
    .catch(error => {
        console.log(error)
    })
}
