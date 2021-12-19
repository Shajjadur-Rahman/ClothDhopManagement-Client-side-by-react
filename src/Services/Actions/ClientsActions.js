import * as actionType from '../Types'
import axios from 'axios'


export const getClients = (phoneNo) => async dispatch => {
    dispatch({
        type: actionType.GET_CLIENT_REQUEST
    })
    await axios({
        method: 'get',
        url: phoneNo ? `order/clients/?phone=${phoneNo.phone}` : 'order/clients/'
    })
    .then(response => {
        dispatch({
            type: actionType.GET_CLIENT_SUCCESS,
            payload: response.data.data,
            total_customer: response.data.total_customer
        })
    })
    .catch(error => {
        console.log(error)
    })
}


