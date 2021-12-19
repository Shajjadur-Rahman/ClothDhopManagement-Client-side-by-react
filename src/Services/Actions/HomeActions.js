import * as actionType from '../Types'
import axios from 'axios'



export const getTotalOrder = () => async dispatch => {
    dispatch({
        type: actionType.GET_ORDER_SUMMARY_REQUEST
    })
    axios({
        method: 'get',
        url: 'order/total-order-summary/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_ORDER_SUMMARY_SUCCESS,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}