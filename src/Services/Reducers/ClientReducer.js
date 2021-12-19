import * as actionType from '../Types'

const initialState = {
    clients: [],
    total: 0,
    loading: false,
    error: ''
}

const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_CLIENT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionType.GET_CLIENT_SUCCESS:
            return{
                ...state,
                clients: action.payload,
                total: action.total_customer,
                loading: false
            }
        default:
            return state
    }
}

export default clientReducer