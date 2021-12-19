import * as actionType from '../Types'
import axios from 'axios'


// Sent Email

export const sentEmail = email_obj => dispatch => {
    axios({
        method: 'post',
        url: 'mail/send-email/',
        data: email_obj
    })
    .then(response => {
        dispatch({
            type: actionType.SEND_EMAIL,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}

// Fetch all sent mails

export const allSentMails = () => async dispatch => {
    dispatch({
        type: actionType.ALL_SENT_MAILS_REQUEST
    })
    await axios({
        method: 'get',
        url: 'mail/all-sent-mails/'
    })
    .then(response => {
        dispatch({
            type: actionType.ALL_SENT_MAILS_SUCCESS,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
}