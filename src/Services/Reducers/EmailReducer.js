import * as actionType from '../Types'



const initialState = {
    mails: [],
    loading: false,
    error: ''
}

const emailReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.ALL_SENT_MAILS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.ALL_SENT_MAILS_SUCCESS:
            return{
                ...state,
                mails: action.payload,
                loading: false
            }
        case actionType.SEND_EMAIL:
            return{
                ...state,
                mails: [action.payload, ...state.mails]
            }
        default:
            return state
    }
}

export default emailReducer